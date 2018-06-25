import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../model/credentials.model';
import {Injectable} from '@angular/core';
import {UserModel} from '../user/user.model';
import {v} from '@angular/core/src/render3';
import {StatusMessage} from '../model/status-message.model';
import {StatusEnum} from '../model/enum/status.enum';
import {RoleModel} from '../model/role.model';
import {PersonModel} from '../model/person.model';
import {BankAccountService} from '../history/bank-account.service';
import {CardInformationService} from '../card-management/card-information/card-information.service';
import {JsonMessageModel} from '../model/json-message.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService{

  constructor(private http: HttpClient,
              private bankAccountService: BankAccountService,
              private cardService: CardInformationService,
              private router: Router
  ){
  }

  loggedUser: UserModel;
  personData: PersonModel;
  unLogged: boolean=false;
  role : string;
  permissionId: number;

  public loginUser(credentials: CredentialsModel):StatusMessage{
    let status: StatusMessage = new StatusMessage();
    this.http.post<any>(environment.endpointBase +'login',JSON.stringify(credentials),{observe: 'response', headers:{'Content-Type': 'application/json'},withCredentials:true, responseType:'json'})
      .subscribe( res => {
        // (json: Object) => {
        status.status=StatusEnum.OK;
        status.message = "Zalogowano pomyslnie";
          this.loggedUser=  res.body as UserModel;
          console.log(this.loggedUser);
          this.getPersonData();
      },
      error => {
        status.status=StatusEnum.ERROR;
        status.message= "Niepoprawne dane logowania";
      });
    return status;
  }

  public getPersonData(){
      let status: StatusMessage = new StatusMessage();
      let message = new JsonMessageModel();
      this.http.get(environment.endpointBase +'login/'+this.loggedUser.idUser,{headers:{'Content-Type': 'application/json'}, responseType:'json'})
        .subscribe(res => {

            status.status=StatusEnum.OK;
            status.message = "User data loaded succesfully";
            message = res as JsonMessageModel;
            this.role=  message.message;
            this.permissionId = message.id;
            if(this.role==='CLIENT')
            {
              this.bankAccountService.getAccountList(this.loggedUser.idUser).then((value => {
                this.cardService.getCardInformation(this.bankAccountService.bankAccounts[0].idBankAccount);
                this.router.navigate(['/user']);
              }));

            }else{
              if(this.role==='MANAGER')
              {
                this.router.navigate(['/manager']);
              }else{
                if(this.role==='CONSULTANT')
                {
                  this.router.navigate(['/consultant']);
                }
              }
            }
          },
          error => {
            status.status=StatusEnum.ERROR;
            status.message= "Error with person data loading";
            console.log(status.message);
          });
  }

  public checkLoggedUser(){
    console.log("Sprawdza się czy zalogowany");
    let status: StatusMessage = new StatusMessage();
    this.http.get(environment.endpointBase +'login',{observe: 'response', headers:{'Content-Type': 'application/json'},withCredentials:true, responseType:'json'})
      .subscribe(res => {
          // (json: Object) => {
          status.status=StatusEnum.OK;
          this.loggedUser=  res.body as UserModel;
          console.log(this.loggedUser);
          this.getPersonData();
        },
        error => {
          this.unLogged=true;
          this.router.navigate(['/login']);
        });
  }

  public logout(){
    this.http.get(environment.endpointBase +'login/out',{observe: 'response', headers:{'Content-Type': 'application/json'},withCredentials:true, responseType:'json'})
      .subscribe(res => {
          console.log(res);
          this.loggedUser=null;
          this.bankAccountService.bankAccount=null;
          this.bankAccountService.bankAccounts=null;
          this.cardService.userCards=null;
          this.personData=null;
          this.role=null;
          this.router.navigate(['/login'])
        },
        error => {

        });

  }

}
