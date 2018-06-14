import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../../model/credentials.model';
import {AuthService} from '../auth.service';
import {UserModel} from '../../user/user.model';
import {StatusMessage} from '../../model/status-message.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseMessage: StatusMessage= new StatusMessage();
  username='';
  password='';

  constructor( private auth: AuthService, private router: Router) { }

  myForm: FormGroup;


  ngOnInit() {
    this.myForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  login(){
    console.log("Login: "+ this.username+" hasło: "+ this.password);
    let credentials : CredentialsModel= new CredentialsModel(this.username, this.password);
    this.responseMessage = this.auth.loginUser(credentials);
    if(this.auth.role==='CLIENT')
    {
      this.router.navigate(['/user']);
    }
    if(this.auth.role==='MANAGER')
    {
      this.router.navigate(['/manager']);
    }
    if(this.auth.role==='CONSULTANT')
    {
      this.router.navigate(['/consultant']);
    }

  }

}
