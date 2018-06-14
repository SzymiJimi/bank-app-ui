import {Serializable} from './serializable.model';


export class JsonMessageModel extends Serializable{
  message: string;
  id: number;
}
