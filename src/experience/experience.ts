import { Component } from '@angular/core';
import { materialImports } from '../shared/material';

@Component({
  selector: 'app-experience',
  imports: [materialImports],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  goToCompanyLink(url: string) {
    window.open(url, '_blank'); // Opens in new tab
  }

}
