import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GERENCIADOR DE FOTOS E EVENTOS';

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
