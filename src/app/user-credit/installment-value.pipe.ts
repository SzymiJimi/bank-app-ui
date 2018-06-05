import {Pipe, PipeTransform} from '@angular/core';


@Pipe(
  {name: 'installmentValue'}
)
export class InstallmentValuePipe implements PipeTransform{

  transform(value: string):string{
    let result: string;
    let number: number;
    number = Math.round(+value *100)/100;
    if(Number.isInteger(number))
    {
      result = String(number);
      result= result+".00";
    }else{
      if(Number.isInteger(number*10))
      {
        result= String(number);
        result= result+"0";
      }else{
        result= String(number);

      }

    }
    return result;
  }

}
