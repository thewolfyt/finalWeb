import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactUSComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'contactUs', component: ContactUSComponent },
  { path: '**', component: LoginFormComponent } // If no matching route found, go back to home route
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
