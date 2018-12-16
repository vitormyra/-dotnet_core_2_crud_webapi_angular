import { UsuarioService } from '.././../shared/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../shared/usuario/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'usuario-incluir',
  templateUrl: './usuario-incluir.component.html',
  styleUrls: ['./usuario-incluir.component.css']
})
export class UsuarioIncluirComponent implements OnInit {

  usuario: Usuario;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.LimparForm();
  }

  LimparForm(form?:NgForm){
    if(form!=null){
      form.reset();
      this.usuario = {
        usuarioId: 0,
        senha: '',
        email: '',
        nome: ''
      }
    }
  }

  onSubmit(form:NgForm){
    this.usuarioService.CadastrarUsuario(form.value)
    .subscribe((data:any) =>{
      if(data.Succeeded == true){
        this.LimparForm(form);
      }
    });
    window.location.reload();
  }
}



