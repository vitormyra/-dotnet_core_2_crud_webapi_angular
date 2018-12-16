import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly rootUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) {  }

  CadastrarUsuario(usuario: Usuario){
    const body: Usuario = {
      nome: usuario.nome,
      senha: usuario.senha,
      email: usuario.email,
      usuarioId: usuario.usuarioId
    }
    return this.http.post(this.rootUrl + '/api/usuarios', body);
  }

  BuscarUsuarios() {
    return this.http.get(this.rootUrl + '/api/usuarios');
  }    

  ApagarUsuario(usuarioId: number) {
    return this.http.delete(this.rootUrl + '/api/usuarios/' + usuarioId).subscribe();
  }    
}
