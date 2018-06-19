import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-change-data-end',
  templateUrl: './change-data-end.component.html',
  styleUrls: ['./change-data-end.component.css']
})

export class ChangeDataEndComponent implements OnInit {

  changedataendForm: FormGroup;
pass: FormControl
myname = 'Jakub'
surnames = "Gałązka"
account = '871312J41514123414114124124124'
tmp = '66'
hajs = 0
napis = ' xd'
createFormControls() {

this.pass = new FormControl('', [Validators.required, Validators.pattern("^{5}")]);


}




createForm() {
       this.changedataendForm = new FormGroup({
      pass: this.pass,
});
}


  constructor() { }


  ngOnInit() {

       this.createFormControls();
    this.createForm();
  }

onClick(event)
{
this.napis = 'Hasło zmienione';
}

}

