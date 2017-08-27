import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  saveUser(user) {
    window.localStorage.setItem('user', user)
  }

  getUser() {
    return window.localStorage.getItem('user')

  }
  getToken () {
    return window.localStorage.getItem('token')
  }
  removeUser() {
    window.localStorage.removeItem('user')
  }
  authenticatedUser(token) {
    window.localStorage.setItem('token', token)
  }
  isUserAuthenticated() {
    return window.localStorage.getItem('token') !== null
  }
  deAuthenticateuser() {
    window.localStorage.removeItem('token')
  }

}
