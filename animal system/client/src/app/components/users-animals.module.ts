import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './register-user/register.component'
import { LoginComponent } from './login-user/login-user.component'
import { AddAnimalComponent } from './add-animal/add-animal.component'
import { ListAnimalsComponent } from './list-animals/list-animals.component'
import { AnimalDetailsComponent } from './animal-details/animal-detail.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { StatsComponent } from './stats/stats.component'

import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { UserService } from '../services/user.service'
import { AnimalService } from '../services/animal.service'
import { StatsService } from '../services/stats.service'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AddAnimalComponent,
    ListAnimalsComponent,
    AnimalDetailsComponent,
    UserProfileComponent,
    StatsComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToasterModule,
    RouterModule
  ],
  providers: [UserService, AnimalService, StatsService],
  exports: []
})
export class UsersAnimalsModule { }