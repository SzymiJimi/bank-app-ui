import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient){
    this.http.get<any>(environment.endpointBase +'home').subscribe(res => {
      this.title=res.name+" "+res.surname;
      console.log(res);
  })
  };
}
