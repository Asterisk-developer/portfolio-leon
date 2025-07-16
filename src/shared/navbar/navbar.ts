import { Component, OnInit } from '@angular/core';
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
  pageTitle = 'Leon';
  name = 'Leon'
  role = 'Frontend Developer | Angular & React';
  navtab = [
    { linkText: 'Home', url: '', tooltip: 'Home', action: () => this.goToHome() },
    { linkText: 'Experience', url: '', tooltip: 'Experience', action: () => this.goToExperience() },
    { linkText: 'Projects', url: '', tooltip: 'Projects', action: () => this.goToProjects() },
    { linkText: 'About', url: '', tooltip: 'About', action: () => this.goToExperience() },
  ];

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      const navigation: any = this.router.getCurrentNavigation();
      const state = navigation?.extras.state;
      this.pageTitle = state?.pageTitle ? state?.pageTitle : 'Leon';
    })
  }
  goToExperience(): void {
    this.router.navigate(['/experience'], {
      state: { pageTitle: 'Experience' }
    })
  }
  goToHome(): void {
    this.router.navigate([''], {
      state: { pageTitle: 'Leon' }
    })
  }
  goToProjects(): void {
    this.router.navigate(['/projects'], {
      state: { pageTitle: 'Projects' }
    })
  }
}
