import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticateService } from '../service/hardcode-authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthentication : HardcodeAuthenticateService) { }

  ngOnInit() {
    this.hardcodedAuthentication.logout();
  }

}
