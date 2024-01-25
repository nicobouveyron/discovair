import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../types/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  private _authUrl = `${environment.apiUrl}/auth`;

  constructor() {}

  login(): Signal<UserInterface> {
    return signal({ id: 1, email: '', password: '' });
  }
}
