import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForwardgeocodeComponent } from './forwardgeocode/forwardgeocode.component';
import { ReversegeocodeComponent } from './reversegeocode/reversegeocode.component';
import { ConnectComponent } from './connect/connect.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '' , component:ConnectComponent },
  { path: 'forwardgeocode' , component : ForwardgeocodeComponent, canActivate: [AuthGuard]},
  { path: 'reversegeocode' , component : ReversegeocodeComponent, canActivate: [AuthGuard]},  
  { path: '**' , redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
