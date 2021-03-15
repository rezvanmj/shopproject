import { GlobalService } from './../services/global.service';
import { Router } from '@angular/router';
import { IAdmin } from './../interfaces/admin';
import { AdminService } from './../services/admin.service';
import { IUser } from './../interfaces/user';
import { UsreService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  username:String = "";
  password:String ="";
  users : IUser[];
  Admins : IAdmin[];

  constructor(private UsreService:UsreService , private adminService : AdminService , private router : Router) {
    this.users = this.UsreService.users ;
    this.Admins = this.adminService.admins ;
   }

  ngOnInit(): void {
  }


  signIn(userName : String , Pass : String){
    if(this.users.some(user => user.userName === userName && user.password === Pass)){
    GlobalService.UserLoggedin = true ;
    GlobalService.AdminLoggedin = false ;
    this.router.navigate(['']);
    }
    if(this.Admins.some(admin => admin.userName === userName && admin.password === Pass)){
      GlobalService.AdminLoggedin = true ;
      GlobalService.UserLoggedin = false ;
      this.router.navigate(['editProducts']);
    }
    if(!this.Admins.some(admin => admin.userName === userName && admin.password === Pass) && !this.users.some(user => user.userName === userName && user.password === Pass)){
      alert("نام کاربری یا کلمه ی عبور اشتباه است");
    }
  }



}
