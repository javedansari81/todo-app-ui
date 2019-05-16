import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticateService } from '../service/hardcode-authenticate.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn : boolean = false;
  constructor(private hardcodedAuthentication: HardcodeAuthenticateService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
  }

}
