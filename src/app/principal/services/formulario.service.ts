import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  postUser(user: any): Observable<string> {
    return this.http.post<string>("https://reqres.in/api/users", user)
  }
}


