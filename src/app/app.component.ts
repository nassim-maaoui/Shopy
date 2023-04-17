import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularshop';
  test=false
  user:any
  constructor(private cookie:CookieService){}
  ngOnInit(): void {
    console.log(this.user.role)
  }
  
  
  
  checknavbar(){
    this.user=JSON.parse(this.cookie.get("user"))

    if(this.user.role==="admin"){
      return true
    }else{
      return false
    }
    
  }
  

}
