import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularshop';
  test=false
  token=false
  user:any
  role:any
  constructor(private cookie:CookieService,private auth:AuthService){}
  ngOnInit(): void {
    this.cookie.set("role","user")
    this.role=this.cookie.get("role")
    
  }
  
  
  
  checknavbar(){
    if(this.role==="user"){
      return true
    }
   if(this.cookie.get("token").length!=0 && this.auth.getData()==="admin"){
    return true
   }else{
    return false
   }

    
  }
  


}