import { ApiService } from './../../services/api.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';

@Component({
  selector: 'app-deletar-dialog',
  templateUrl: './deletar-dialog.component.html',
  styleUrls: ['./deletar-dialog.component.css']
})
export class DeletarDialogComponent implements OnInit {



  @Input() id: number = 0;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) { }

  ngOnInit(): void {
  }

  deletar(id: number){

    this.api.delete('usuarios', id).subscribe(res => {
      this.dialog.closeAll();
      window.location.reload();
    })
  }

  cancelar(){
    this.dialog.closeAll();
  }

}
