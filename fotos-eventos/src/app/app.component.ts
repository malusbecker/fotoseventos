import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit{
  @ViewChild ('mobile') sidNav?: ElementRef;

  title = 'GERENCIADOR DE FOTOS E EVENTOS';

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sidNav?.nativeElement);
  }

  primeiro = {
    titulo: 'Novo Álbum',
    styles: { backgroundColor: '#007bff' }
};

  segundo = {
  titulo: 'Buscar Álbum',
  styles: { backgroundColor: '#6c757d' }
};
  terceiro = {
  titulo: 'Editar Álbum',
  styles: { backgroundColor: '#28a745' }
};
  quarto = {
  titulo: 'Excluir Álbum',
  styles: { backgroundColor: '#dc3545' }
};

}
