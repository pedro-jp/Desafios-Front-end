import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjetosComponent } from './projetos/projetos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjetosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
