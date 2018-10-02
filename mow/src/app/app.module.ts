import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import {FileUploadModule} from 'ng2-file-upload'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,FileUploadModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
      },

 
  // {
  //   path:"resadd",
  //   loadChildren:"./resadd/resadd.module#ResaddModule"
  // },
{
  path:"signup",
  loadChildren:"./signup/signup.module#SignupModule"
},
{
  path:"login",
  loadChildren:"./login/login.module#LoginModule"
}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
