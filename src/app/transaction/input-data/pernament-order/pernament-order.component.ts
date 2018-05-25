import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {MatExpansionPanel} from '@angular/material';

@Component({
  selector: 'app-pernament-order',
  templateUrl: './pernament-order.component.html',
  styleUrls: ['./pernament-order.component.css']
})
export class PernamentOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() dataSavedEvent = new EventEmitter<boolean>()

  selected: string = 'Zewnętrzny';
  transactionTypeList= ['Zewnętrzny', 'Własny', 'Zdefiniowany'];
  selectedFrequency= '';
  transactionFrequencies= ['Codziennie', 'Co miesiąc', 'Co kwartał'];
  timePeriodIsSet:boolean= false;
  startMinDate: Date = new Date();
  endMinDate: Date= new Date();
  startDate: Date;
  endDate: Date;
  periodSaved:boolean= false;


  clicked(type: string, panel: MatExpansionPanel,  event: Event) {
    this.selected = type;
    console.log('Panel ' + panel);
    panel.close();

  }

  changedFrequency(){

  }

  dataChanged(){
    let date : Date = new Date();

    switch (this.selectedFrequency){
      case "Codziennie":{
        console.log("Weszło w codziennie");
        date= this.startDate;
        date.setDate(date.getDate()+1);
        this.endMinDate=date;
        break;
      }
      case "Co miesiąc":{
        console.log("Weszło w co miesiac");
        date= this.startDate;
        date.setMonth(date.getMonth()+1);
        this.endMinDate=date;
        break;
      }
      case "Co kwartał":{
        date= this.startDate;
        date.setMonth(date.getMonth()+3);
        this.endMinDate=date;
        break;
      }
    }

  }

  resetTimePeriod(){
    this.periodSaved=false;
    this.startMinDate= new Date();
    this.endMinDate = new Date();
    this.selectedFrequency='';
    this.timePeriodIsSet=false;
    this.startDate=null;
    this.endDate=null;
    this.dataSavedEvent.emit(this.periodSaved);
  }

  endDateChanged(){
    this.timePeriodIsSet=true;
  }

  savePeriod(){
    this.periodSaved=true;
    this.dataSavedEvent.emit(this.periodSaved);

  }
}
