import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 hello = true;

  public _logInUser = false;

  constructor(private router: Router) {
  }

  colorHeader(boll: boolean) {
    this.hello = boll;
  }

  logout() {
    this.colorHeader(true);
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("dream_created");
    this._logInUser = false;
    this.router.navigate(['/login']);
  }

}
