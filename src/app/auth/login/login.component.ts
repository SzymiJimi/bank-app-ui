import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CredentialsModel} from '../../model/credentials.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseMessage='';
  username='';
  password='';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login(){
    console.log("Login: "+ this.username+" hasło: "+ this.password);
    let credentials : CredentialsModel= new CredentialsModel(this.username, this.password);
    this.http.post(environment.endpointBase +'login',JSON.stringify(credentials),{headers:{'Content-Type': 'application/json'}, responseType:'text'} ).subscribe(res=>{
      console.log("Jestem tuuuu");

    });
  }

}
