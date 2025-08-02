import { Component, HostListener, OnInit } from '@angular/core';
import { materialImports } from '../shared/material';

@Component({
  selector: 'app-about-page',
  imports: [materialImports],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage implements OnInit {
  yearsOfExperience = `6+ Years`
  isSmallScreen = false;
  ngOnInit(): void {

    this.checkScreen();
  }
  @HostListener('window:resize')
  checkScreen() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  goToLink(url: string) {
    window.open(url, '_blank'); // Opens in new tab
  }

  downloadResume(): void {
    window.open('assets/resume_leon.pdf', '_blank');
  }
}
