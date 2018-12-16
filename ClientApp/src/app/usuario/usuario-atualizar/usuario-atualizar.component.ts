import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/usuario/usuario.model';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  AtualizarUsuario(user: Usuario){
    alert(user.nome);
  }

}
