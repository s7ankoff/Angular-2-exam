import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register-user/register.component'
import { LoginComponent } from './components/login-user/login-user.component'
import { AddAnimalComponent } from './components/add-animal/add-animal.component'
import { ListAnimalsComponent } from './components/list-animals/list-animals.component'
import { UserProfileComponent } from './components/user-profile/user-profile.component'
import { AnimalDetailsComponent } from "./components/animal-details/animal-detail.component"
import { StatsComponent } from './components/stats/stats.component'

import { PrivateRoute } from './private-routes'

const routes: Routes = [
  { path: '', component: ListAnimalsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'animals/mine', component: UserProfileComponent },
  { path: 'animals/add', component: AddAnimalComponent, canActivate: [PrivateRoute] },
  { path: 'animals/details/:id', component: AnimalDetailsComponent, canActivate: [PrivateRoute] },
  { path: 'animals/all', component: ListAnimalsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class RoutesModule { }