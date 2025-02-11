import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  userName: string = 'Usuario'; //  Puedes cambiar esto dinámicamente

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); //  Elimina el token de autenticación
    this.router.navigate(['/login']); //  Redirige al login
  }
}
