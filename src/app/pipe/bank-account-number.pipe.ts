import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {name: 'accountNumberPipe'}
)
export class BankAccountNumberPipe implements PipeTransform{

  transform(value: string):string{
    let formattedAccountNumber: string='';
    let slicedString: string;
    slicedString=value.slice(0,2);
    formattedAccountNumber=formattedAccountNumber+slicedString;
    slicedString=value.slice(2,6);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=value.slice(6,10);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=value.slice(10,14);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=value.slice(14,18);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=value.slice(18,22);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    slicedString=value.slice(22,26);
    formattedAccountNumber=formattedAccountNumber+" "+slicedString;
    return formattedAccountNumber;
  }

}
