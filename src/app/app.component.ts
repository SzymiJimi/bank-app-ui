import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user=false;


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
    // this.http.get<any>(environment.endpointBase +'home').subscribe(res => {
    //   this.title=res.name+" "+res.surname;
    //   console.log(res);
    // })
    // };
  console.log(activatedRoute);
  console.log(router);
  }

  funkcja():boolean{
    let value = this.router.url.slice(0,8);
    // console.log(router.routerState.snapshot.url);

    return value === '/manager';
  }
}
