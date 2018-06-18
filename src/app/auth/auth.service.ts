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
  role : string;
  permissionId: number;

  public loginUser(credentials: CredentialsModel):StatusMessage{
    let status: StatusMessage = new StatusMessage();
    this.http.post(environment.endpointBase +'login',JSON.stringify(credentials),{headers:{'Content-Type': 'application/json'}, responseType:'json'})
      .subscribe((json: Object) => {
        status.status=StatusEnum.OK;
        status.message = "Zalogowano pomyslnie";
          this.loggedUser=  new UserModel().fromJSON(json);
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
              }));
              this.router.navigate(['/user']);
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

  public saveLoginInfo(){
    let status: StatusMessage = new StatusMessage();
    this.http.post(environment.endpointBase +'login/history',JSON.stringify(this.loggedUser.idUser),{headers:{'Content-Type': 'application/json'}, responseType:'json'})
      .subscribe(res => {
          status.status=StatusEnum.OK;
          status.message = "Dodano logowanie do historii";
        },
        error => {
          status.status=StatusEnum.ERROR;
          status.message= "Niepoprawne dodanie do historii";
        });
  }

}
