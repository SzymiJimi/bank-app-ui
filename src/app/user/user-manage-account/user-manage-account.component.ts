import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-user-manage-account',
  templateUrl: './user-manage-account.component.html',
  styleUrls: ['./user-manage-account.component.css'],
  animations:[
    trigger('myAnimation', [

      state('small', style({
        width: '30%'
      })),
      state('large', style({
        width: '100%',
      })),

      transition('small <=> large', animate('300ms ease-in')),

    ]),
    trigger('showAnimation', [

      state('unvisible', style({
        display: 'none',
      })),
      state('visible', style({
        display: 'inherit',
      })),

      transition('unvisible <=> visible', animate('300ms ease-in')),

    ]),
  ]
})
export class UserManageAccountComponent implements OnInit {

  constructor() { }

  state: string= 'large';
  rightColShow='unvisible';
  // styleWidth="100%";
  rightCol=false;

  ngOnInit() {
  }


  animateMe(){
    this.state=(this.state === 'small'? 'large' : 'small');
    this.rightColShow=(this.rightColShow === 'unvisible'? 'visible' : 'unvisible');
  }


  clicked(){

    // this.styleWidth='';
    this.rightCol=true;
  }
}
