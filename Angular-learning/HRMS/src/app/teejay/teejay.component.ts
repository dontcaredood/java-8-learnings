import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeejayService } from 'src/service/teejay.service';
@Component({
  selector: 'app-teejay',
  templateUrl: './teejay.component.html',
  styleUrls: ['./teejay.component.css']
})
export class TeejayComponent implements OnInit {

  constructor(private teejay:TeejayService) { }

  ngOnInit(): void {
  }

  login(loginForm : NgForm){
    let loginId : string = ""
    let password: string =""
    console.log(loginForm.value)
    loginId  = loginForm.value.loginId
    password = loginForm.value.password
    this.teejay.doLogin(loginId, password).subscribe(response => {
      console.log(response)
    }, error=>{
      console.log(error.error.message)
    })
  }
}
