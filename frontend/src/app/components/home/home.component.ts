import { Usuario } from './../../models/usuario.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get('usuarios').subscribe(res => {
      this.usuarios = res;
    })
  }

}
