import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Router } from '@angular/router';
import { HardcodeAuthenticateService } from '../service/hardcode-authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = 'Invalid Credentials';
  isInvalid = false;
  constructor(private route : Router,private hardcodeAuthenticateService : HardcodeAuthenticateService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodeAuthenticateService.Authenticate(this.username,this.password)){
        this.isInvalid = false;
        this.route.navigate(['welcome',this.username]);
    }else{
      this.isInvalid = true;
    }
    this.username = ''
    this.password = ''
  }

}
