import { Component } from '@angular/core';
import { materialImports } from '../shared/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  imports: [materialImports],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  constructor(private router: Router) { }

  goToCompanyLink(url: string) {
    window.open(url, '_blank'); // Opens in new tab
  }

  goToProjects(projectId: string): void {
    this.router.navigate([`/projects`], {
      state: {
        pageTitle: 'Projects',
        showBreadCrumb: true,
        goBackLink: 'experience',
        projectsFor: projectId
      }
    })
  }


}
