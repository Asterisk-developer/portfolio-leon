import { Component } from '@angular/core';
import { materialImports } from '../shared/material';
import { CommonModule } from '@angular/common';
import { Navbar } from '../shared/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'home-page',
  imports: [materialImports, CommonModule,Navbar,RouterOutlet],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: true,
   animations: [
    trigger('routeFade', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomePage {
  constructor(){} 
  skills = ['Angular', 'React', 'TypeScript', 'Jest', 'Azure DevOps', 'Material'];

  
}
