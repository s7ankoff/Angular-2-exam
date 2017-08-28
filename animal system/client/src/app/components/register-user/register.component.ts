import { Component, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { RegisterUser } from './register-user.model'
import { UserService } from '../../services/user.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user: RegisterUser = new RegisterUser()

  constructor(
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    private userService: UserService,
    private router: Router
  ) {
    this.toastr.setRootViewContainerRef(vcr)
  }



  register() {

    if (this.user.name.length < 3) {
      this.toastr.error('Name must be at least 3 chars!', 'Error')
      return
    }
    if (this.user.password.length < 4 || this.user.confirmPassword.length < 4) {
      this.toastr.error('Password should be at least 4 chars!', 'Error')
      return
    }
    if (!this.emailValidation()) {
      this.toastr.error('Please provide valid e-mail', 'Error')
      return
    }
   

    this.userService
      .register(this.user)
      .subscribe(res => {
        if (res.success === false) {
          this.toastr.error(`${res.errors[Object.keys(res.errors)[0]]}`, 'Error!')
        }
        if (res.success === true) {

          this.toastr.success(`You are registered!Please login now.`, 'Success!')
          setTimeout(() => {
            this.router.navigateByUrl('users/login')
          }, 3000)
        }

      })
  }
  emailValidation() {
    const emailValidator = new RegExp('^[^\s@]+@[^\s@]+\.[^\s@]+$')
    return emailValidator.test(this.user.email)
  }
}