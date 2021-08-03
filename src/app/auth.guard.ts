import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private _connect: ConnectComponent, private _router: Router)
  { }

  canActivate() : boolean
  {
    if (this._connect.connected())
    { 
      return true;
    }
    else
    { 
      this._router.navigate(['/']);
      return false;
    }
  }
  
}
