import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      (response: any) => {  // ⬅ Corregido: Agregado ": any"
        console.log('Registro exitoso', response);
        this.router.navigate(['/login']);
      },
      (error: any) => {  // ⬅ Corregido: Agregado ": any"
        console.error('Error en el registro:', error);
      }
    );
  }
}
