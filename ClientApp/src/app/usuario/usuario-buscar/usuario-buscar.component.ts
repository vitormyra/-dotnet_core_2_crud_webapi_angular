import { Usuario } from './../../shared/usuario/usuario.model';
import { UsuarioService } from './../../shared/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-usuario-buscar',
  templateUrl: './usuario-buscar.component.html',
  styleUrls: ['./usuario-buscar.component.css']
})
export class UsuarioBuscarComponent implements OnInit {

  usuario;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.BuscarUsuarios();
  }

  BuscarUsuarios(){
    this.usuarioService.BuscarUsuarios().subscribe(dados => this.usuario = dados);
  }

  ApagarUsuario(user: Usuario){
    if(window.confirm('Você realmente deseja apagar ' + user.nome + '?')){
      this.usuarioService.ApagarUsuario(user.usuarioId);
      window.location.reload();
    }
  }

  AtualizarUsuario(user: Usuario){   
    alert(user.email);
  }
}
