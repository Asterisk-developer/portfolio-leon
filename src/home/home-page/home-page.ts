import { Component } from '@angular/core';
import { materialImports } from '../../shared/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [materialImports, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: true
})
export class HomePage {
  name = 'Leon';
  role = 'Frontend Developer | Angular & React';
  socialLinks = [
    { linkText: 'Experience', url: '', tooltip: 'GitHub' },
    { linkText: 'My Works', url: '', tooltip: 'LinkedIn' },
    { linkText: 'About', url: '', tooltip: 'Email' },
  ];
  skills = ['Angular', 'React', 'TypeScript', 'Jest', 'Azure DevOps', 'Material'];
}
