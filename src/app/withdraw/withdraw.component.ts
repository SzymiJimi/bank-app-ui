import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})

export class WithdrawComponent implements OnInit {
  
  withdrawForm: FormGroup;
sum : FormControl;//kwota do wydania
ammount = 26242.14
name = 'Jakub'
surname = 'Gałązka'
account = '87131241514123414114124124124'
tmp = '66'
hajs = 0
napis = ' '
createFormControls() {

this.sum = new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,8}.[0-9]{2}")]);


}




createForm() {
       this.withdrawForm = new FormGroup({
      sum: this.sum,
});
}
  
  
  
  constructor() { }
     

  ngOnInit() {

       this.createFormControls();
    this.createForm();
  }

onClick(event)
{
this.napis = ' Wypłacono gotowkę '
}

}


