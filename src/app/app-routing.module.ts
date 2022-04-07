import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { OurWorksComponent } from './our-works/our-works.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path:'',
    component: ShellComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'demo',
    component: DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
