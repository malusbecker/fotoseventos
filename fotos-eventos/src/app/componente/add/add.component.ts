import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inteventos } from './../../interface/inteventos';
import { EventosService } from './../../eventos/eventos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  fteventos: Inteventos = {
    id: 0,
    nome: '',
    data: '',
  };

  constructor(private eventosService:EventosService,
    private router:Router) {}

  ngOnInit(): void {}

  create(){
    this.eventosService.create(this.fteventos)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/ftevents/add"])
      },
      error:(err) => {

        console.log(err);
      }
    })
  }
}
