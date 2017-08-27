import { Component, OnInit } from '@angular/core'

import { AuthService } from '../services/auth.service'
import { Subscription } from 'rxjs/Subscription';

import { AuthChecker } from '../services/auth-checker.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  isAthenticated: boolean = false
  username: string = ''
  subscription: Subscription;

  constructor(private authChecker: AuthChecker,
    private authService: AuthService
  ) {
    this.subscription = this.authChecker.getMessage()
      .subscribe(message => {
        this.isAthenticated = message.athenticated
        this.username=message.username
      })
  }

  ngOnInit() {
    if (this.authService.isUserAuthenticated()) {
     
      this.isAthenticated = true
      console.log(this.username)
    }
    this.username = this.authService.getUser()
  }
  logout() {
    this.authService.deAuthenticateuser()
    this.authService.removeUser()
    this.isAthenticated = false
  }

}