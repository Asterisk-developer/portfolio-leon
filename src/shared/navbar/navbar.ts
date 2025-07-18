import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { materialImports } from '../material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar-section',
  imports: [materialImports, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  constructor(private router: Router) { }
  isSmallScreen = false;
  pageTitle = 'Leon';
  name = 'Leon'
  role = 'Frontend Developer | Angular & React';
  navtab = [
    { linkText: 'Home', url: '', icon: 'home',title:'' },
    { linkText: 'Experience', url: 'experience', icon: 'work',title:'Experience'},
    { linkText: 'Projects', url: 'projects', icon: 'library_books',title:'Projects'},
    // { linkText: 'About', url: 'about', icon: 'person',title:'About' },
  ];

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      const navigation: any = this.router.getCurrentNavigation();
      const state = navigation?.extras.state;
      this.pageTitle = state?.pageTitle ? state?.pageTitle : 'Leon';
    })
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  navigateToPage(url:string,title:string): void {
    this.router.navigate([`/${url}`], {
      state: { pageTitle: title }
    })
  }
}
