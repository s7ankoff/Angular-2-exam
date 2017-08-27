import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service'

@Injectable()

export class UserService {

  constructor(private httpService: HttpService) { }

  register(user) {
  
 return this.httpService.post('auth/signup', user);
 
  }
  login(user) {
    
   return this.httpService.post('auth/login', user);
   
    }

}