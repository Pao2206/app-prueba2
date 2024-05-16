import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  
  private API_USER = 'http://localhost:3000/users'

  /////LEER - GET////
  getUsers():Observable <any>{
    return this.http.get(this.API_USER)
  }
   
  ////CREAR - POST////
  postUser(user: any): Observable <any>{
    return this.http.post(this.API_USER, user)
  }

   ////ACTUALIZAR - PUT////
   putUser(user: any): Observable <any>{
    return this.http.put(`${this.API_USER}/${user.id}`, user)
  }

  ////ELIMINAR - DELETE////
  deleteUser(id: any): Observable <any>{
    return this.http.delete(`${this.API_USER}/${id}`)
  }

 
  
}
