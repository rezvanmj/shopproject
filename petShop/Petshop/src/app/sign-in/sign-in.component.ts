import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  name:String = "";
  pass:String ="";
temp:String ="";
  constructor() { }

  ngOnInit(): void {
  }


  func(){
   this.temp="hello " + this.name;
  }

}
