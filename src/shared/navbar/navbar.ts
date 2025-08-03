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
  showBreadCrumb = false;
  breadCrumbUrl = '';
  pageTitle = 'Leon';
  name = 'Leon'
  role = 'Frontend Developer | Angular & React';
  navtab = [
    { linkText: 'Home', url: '', icon: 'home', title: '', visible: true },
    { linkText: 'Experience', url: 'experience', icon: 'work', title: 'Experience', visible: true },
    { linkText: 'Projects', url: 'projects', icon: 'library_books', title: 'Projects', visible: false },
    { linkText: 'Skills', url: 'skills', icon: 'person', title: 'Skills', visible: true },
    { linkText: 'About Me', url: 'about', icon: 'person', title: 'About', visible: true }, 
  ];

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      const navigation: any = this.router.getCurrentNavigation();
      const state = navigation?.extras.state;
      if (!state?.showBreadCrumb) {
        this.pageTitle = state?.pageTitle ? state?.pageTitle : 'Leon';
        this.showBreadCrumb = false;
      } else {
        this.pageTitle = state?.pageTitle ? state?.pageTitle : '';
        this.showBreadCrumb = true;
        this.breadCrumbUrl = state?.goBackLink;
      }
    })
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  navigateToPage(url: string): void {
    this.router.navigate([`/${url}`], {
      state: { pageTitle: this.getTitleByUrl(url) }
    })
  }

  getTitleByUrl(url: string): string | undefined {
    const found = this.navtab.find(page => page.url === url);
    return found?.title;
  }
}
