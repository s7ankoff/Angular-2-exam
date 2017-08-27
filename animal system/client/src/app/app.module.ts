import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UsersAnimalsModule } from './components/users-animals.module';
import { RoutesModule } from './routes.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AuthService } from './services/auth.service'
import { AuthChecker } from './services/auth-checker.service'
import { PrivateRoute } from './private-routes'

import { CustomOption } from './core/toastrCustomOptions'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    UsersAnimalsModule,
    RoutesModule,
    FormsModule,
    CoreModule, BrowserAnimationsModule, ToastModule.forRoot(),
    ToastModule.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthChecker, PrivateRoute, { provide: ToastOptions, useClass: CustomOption }],
})
export class AppModule {

}
