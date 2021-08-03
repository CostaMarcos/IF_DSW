import { EdicaoComponent } from './../edicao/edicao.component';
import { DeletarDialogComponent } from './../deletar-dialog/deletar-dialog.component';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit, OnChanges {

  @Input() usuarios: Usuario[] = [];

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();

  displayedColumns: string[] = ['nome', 'opcoes'];

  constructor(
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.usuarios){
      this.dataSource = new MatTableDataSource(this.usuarios);
      console.log(this.usuarios)
    }
  }

  deletar(id: number){
    console.log(id)
    this.dialog.open(DeletarDialogComponent, { data: id })
  }

  editar(usuario: Usuario){
    this.dialog.open(EdicaoComponent, { data: usuario });
  }

}
