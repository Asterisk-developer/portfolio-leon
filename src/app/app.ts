import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from '../home/home-page';

@Component({
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('leon_portfolio');
}
