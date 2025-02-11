import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {  // ⬅ Corregido: Agregado ": any"
        localStorage.setItem('token', response.token);
        this.router.navigate(['/protected']);
      },
      (error: any) => {  // ⬅ Corregido: Agregado ": any"
        console.error('Error en el inicio de sesión:', error);
      }
    );
  }
}
