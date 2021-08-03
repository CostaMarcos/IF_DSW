import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  public imgUrl: string = "../../../assets/ifam-logo.svg";

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  abrirCadastro(){
    this.route.navigateByUrl('cadastro');
  }
}
