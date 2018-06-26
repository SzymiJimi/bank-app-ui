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
  username='client';
  password='client';
  loadingData=false;

  constructor( private auth: AuthService, private router: Router) { }

  myForm: FormGroup;


  ngOnInit() {
    this.myForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  login(){
    let credentials : CredentialsModel= new CredentialsModel(this.username, this.password);
    this.responseMessage = this.auth.loginUser(credentials);
      this.loadingData= true;



  }

}
