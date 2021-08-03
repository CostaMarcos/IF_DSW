import { Usuario } from './../../models/usuario.model';
import { ApiService } from './../../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  public formulario: any;

  constructor(
    private api: ApiService,
    private route: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl(this.data.nome, [Validators.required, Validators.maxLength(50)]),
      usuario: new FormControl(this.data.usuario, [Validators.required, Validators.maxLength(30)]),
      email: new FormControl(this.data.email, [Validators.required, Validators.email, Validators.maxLength(40)]),
      senha: new FormControl(this.data.senha, [Validators.required, Validators.maxLength(20)])
    })
  }

  editar(){
    if(this.formulario.status == 'INVALID')
    {
      this.snackbar.open('Dados incorretos', 'Corrigir', {
        duration: 5000
      })
    }
    else if(this.formulario.status == 'VALID')
    {
      this.api.put(`usuarios/${this.data.id}`, this.formulario.value).subscribe(res => {
        this.dialog.closeAll();
        window.location.reload();
      });
    }
  }

  validarCampo(campo: any){
    if(this.formulario.get(campo).status == 'INVALID' && this.formulario.get(campo).touched)
    {
      return true
    }

    return false
  }

  cancelar(){
    this.dialog.closeAll();
  }
}
