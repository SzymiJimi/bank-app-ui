import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user=false;
  mode = new FormControl('over');

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router, public authService: AuthService) {
    this.checkLoggedUser();

  }

  checkLoggedUser(){
    if(this.authService.role===undefined){
      this.router.navigate(['/login']);
    }
  }



  client():boolean{
    return this.authService.role === 'CLIENT';
  }

  manager():boolean{
    return this.authService.role === 'MANAGER';
  }

  consultant():boolean{
    return this.authService.role === 'CONSULTANT';
  }

  // funkcja():boolean{
  //   let value = this.router.url.slice(0,8);
  //   // console.log(router.routerState.snapshot.url);
  //
  //   return value === '/manager';
  // }
}
