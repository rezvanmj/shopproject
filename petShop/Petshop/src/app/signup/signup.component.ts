import { GlobalService } from './../services/global.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsreService } from '../services/user.service';
import { IUser } from './../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userservice : UsreService , private router :Router) { }

  ngOnInit(): void {
  }


  userobj:IUser={
    name:"" ,
    LastName: "",
    userName: "",
    Email:"",
    password:"" ,
    id:7777,
  };

  name:String ="";
  LastName:String ="";
  userName:String ="";
  Email:String ="";
  password:String ="";

  signUp(){
    if(this.name === "" || this.LastName==="" || this.Email==="" || this.userName === "" || this.password=== ""){
      alert("لطفا همه ی فیلد ها را پر کنید");
    }else {
      this.userobj.name = this.name;
    this.userobj.LastName =this.LastName;
    this.userobj.Email =this.Email;
    this.userobj.password =this.password;
    this.userobj.userName = this.userName;
    this.userservice.addtoUsers(this.userobj);
    alert( this.name +"  عزیز حساب کاربری شما با موفقیت ثبت شد   ");
    GlobalService.UserLoggedin =true ;
    this.router.navigate(['']);}

  }

}
