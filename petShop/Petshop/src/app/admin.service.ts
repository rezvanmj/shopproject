import { IAdmin } from './interfaces/admin';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor() { }


  admin: IAdmin[] = [

{
  name: "رضوان",
  LastName: "مهاجری" ,
  password : "1234" ,
  Email :"rexvanmj@gmaail.com" ,
  userName: "rezvanmj",
  id : 1 ,
  },
  {
    name: "مریم",
    LastName: "ضارع" ,
    password : "1234" ,
    Email :"rexvanmj@gmaail.com" ,
    userName: "maryam",
    id : 1 ,
    },

    {
      name: "نیکی",
      LastName: "رسول پناه" ,
      password : "1234" ,
      Email :"rexvanmj@gmaail.com" ,
      userName: "nikiii",
      id : 3 ,
      },

      {
        name: "فرناز",
        LastName: "مرتضوی" ,
        password : "1234" ,
        Email :"rexvanmj@gmaail.com" ,
        userName: "farnaz",
        id : 4 ,
        },

  ]
}