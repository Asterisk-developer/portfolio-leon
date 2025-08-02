import { Component } from '@angular/core';
import { materialImports } from '../shared/material';

@Component({
  selector: 'app-skills',
  imports: [materialImports],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
