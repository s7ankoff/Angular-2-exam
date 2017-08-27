import { Component, ViewContainerRef } from '@angular/core'
import { LoginUserModel } from './login-user.model'
import { UserService } from '../../services/user.service'
import { AuthService } from '../../services/auth.service'
import { AuthChecker } from "../../services/auth-checker.service"
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { Router } from "@angular/router"

@Component({
  selector: 'login',
  templateUrl: './login-user.component.html'
})

export class LoginComponent {

  private user: LoginUserModel = new LoginUserModel()

  constructor(
    private authChecker: AuthChecker,
    private authService: AuthService,
    public toastr: ToastsManager,
    private router: Router,
    vcr: ViewContainerRef, private userService: UserService) {
    this.toastr.setRootViewContainerRef(vcr)

  }

  login() {


    this.userService
      .login(this.user)
      .subscribe(res => {
        if (res.success == true) {
          this.router.navigateByUrl('animals/all')
        
          this.authChecker.sendMessage({ athenticated: true, username: res.user.name })
          this.authService.saveUser(res.user.name)
          this.authService.authenticatedUser(res.token)

        }
        if (res.success == false) {
          this.toastr.error('Invalid data!', 'Error')
        }

      })
  }

}