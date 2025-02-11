import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    // Puedes mejorar esta lógica según tu backend
    return !!localStorage.getItem('token'); 
  }
}
