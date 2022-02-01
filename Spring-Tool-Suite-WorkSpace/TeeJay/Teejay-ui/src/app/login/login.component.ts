import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeejayService } from 'src/service/teejay.service';
import { UserResponse } from 'src/model/UserResponse'
import { ActivatedRoute, Router } from '@angular/router'; 
import { DataService } from 'src/service/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  testString:string = "hey Buddy!"
  errorResponse : any 
  loginResponse : UserResponse | undefined 
  constructor(private teejay:TeejayService,private router:Router, private data:DataService) { }

  ngOnInit(): void {
  }
  login(loginForm : NgForm){
    let loginId : string = "tjest5"
    let password: string ="User123"
    this.errorResponse = undefined
    console.log(loginForm.value)
    //loginId  = loginForm.value.loginId
   // password = loginForm.value.password
    this.teejay.doLogin(loginId, password).subscribe(response => {
      if(response){
        console.log("Response from Login "+response)
        let responseData = {}
        responseData = response
        this.data.setLoginResponse(responseData)
        this.router.navigate(["dashboard"])
      }
      //console.log(response)
      
    }, error=>{
      console.log(error)
      this.errorResponse = error.error.message
      if(this.errorResponse=="Requested user Not Found"){
        this.errorResponse = "Login Id not found. Please signup and try login."
      }
      
    })
  }
}
