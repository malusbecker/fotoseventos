import { Inteventos } from './../../interface/inteventos';
import { EventosService } from './../../eventos/eventos.service';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-compinicial',
  templateUrl: './compinicial.component.html',
  styleUrls: ['./compinicial.component.css']
})
export class CompinicialComponent implements OnInit {

  allEvents: Inteventos[] = [];

  constructor(private EventosService: EventosService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.EventosService.get().subscribe((data) => {
      this.allEvents = data;
    });
  }

}
