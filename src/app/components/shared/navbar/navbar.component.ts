import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
    constructor(private router:Router,  public auth: AuthService){ 
    }
    searchClient(termino:string){
    this.router.navigate(['/buscar', termino])
    }
    Login(){
      this.auth.loginWithRedirect();
    }
    Logout(){
      this.auth.logout();
    }
  
}
