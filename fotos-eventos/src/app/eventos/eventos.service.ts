import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inteventos } from '../interface/inteventos';

@Injectable({
  providedIn: 'root'


})

export class EventosService {

  constructor(private http: HttpClient) {

  }

  get() {
    return this.http.get<Inteventos[]>( 'http://localhost:3000/ftevents' )
  }

  create(payload: Inteventos) {
    return this.http.post<Inteventos>('http://localhost:3000/ftevents', payload);
  }

}

