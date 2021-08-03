import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario: any;

  constructor(
    private api: ApiService,
    private route: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      usuario: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(40)]),
      senha: new FormControl('', [Validators.required, Validators.maxLength(20)])
    })
  }

  cadastrar(){
    if(this.formulario.status == 'INVALID')
    {
      this.snackbar.open('Dados incorretos', 'Corrigir', {
        duration: 5000
      })
    }
    else if(this.formulario.status == 'VALID')
    {
      this.api.post('usuarios', this.formulario.value).subscribe(res => {
        this.formulario.reset();
        this.route.navigateByUrl('');
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
    this.route.navigateByUrl('');
  }
}
