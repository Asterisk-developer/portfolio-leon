import { AfterViewInit, Component } from '@angular/core';
import { materialImports } from '../shared/material';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [materialImports, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements AfterViewInit {
  companywiseProjectData = [
    {
      company: 'CGI',
      logo: 'assets/cgi.png',
      id: 'cgi-projects',
      projects: [
        {
          projectName: 'CGI Trade360',
          cardBackGround: 'assets/banking-bg.jpg',
          fontColor: 'red',
          period: 'October 2023 - Present',
          techStack: 'Angular JS to Angular | Java',
          projectImagePath: 'assets/trade360.png',
          description: `Played a key role as a core frontend developer in the AngularJS-to-Angular migration of CGI TRADE360,
            markedly elevating performance, maintainability, and user experience. Owned critical modules by enforcing
            high code quality through comprehensive testing, conducting code reviews, and upholding Angular best
            practices.`
        }
      ]
    },
    {
      company: 'TCS',
      logo: 'assets/tcs.png',
      id: 'tcs-projects',
      projects: [
        {
          projectName: 'Acuity Brands',
          cardBackGround: 'assets/smart-light.jpg',
          fontColor: 'white',
          period: 'May 2023 - September 2023',
          techStack: 'React | Java',
          projectImagePath: 'assets/acuity-brands.png',
          description: `At Acuity Brands, I contributed to the development of 
          smart lighting solutions by building scalable, 
          React-based applications using micro frontend 
          architecture. The project focused on enabling 
          efficient light management and automation for 
          commercial environments.           I played a key role in maintaining and 
          improving application performance by resolving 20+ 
          bugs and feature requests through Azure DevOps, 
          enhancing code quality, and ensuring seamless user experience across modules."`
        },
        {
          projectName: 'Swiss RE',
          cardBackGround: 'assets/insurance1.jpg',
          fontColor: 'rgb(35 237 197)',
          period: 'June 2022 - January 2023',
          techStack: 'Angular 10+ | Java',
          projectImagePath: 'assets/swiss-re.png',
          description: `At Swiss RE, I led the UI implementation of two core insurance applications using Angular 12 and Java. The focus was on delivering scalable, maintainable front-end solutions tailored to business needs. I designed and developed over 12 standardized, reusable components that streamlined development processes, reduced overall build time by 5%, and improved long-term maintainability across projects.`
        },
        {
          projectName: 'B3i',
          cardBackGround: 'assets/insurance2.jpeg',
          fontColor: 'white',
          period: '2021 - 2022',
          techStack: 'Angular | Corda (BlockChain)',
          projectImagePath: 'assets/b3i.png',
          description: `At B3i, I ensured seamless cross-browser compatibility for an enterprise-grade insurance platform across Chrome, Firefox, and Edge. I also contributed to integrating backend services across three interconnected applications, enabling consistent functionality and performance while supporting a unified user experience across the platform.`
        },
        {
          projectName: 'Takenaka',
          cardBackGround: 'assets/building.jpg',
          fontColor: 'white',
          period: '2020 - 2021',
          techStack: 'Angular | Hyperledger (BlockChain)',
          projectImagePath: 'assets/takenaka.jpg',
          description: `At Takenaka, I architected a vendor-client property sales portal using Angular 9 and Hyperledger, enabling secure and transparent real estate transactions. The solution streamlined interactions between vendors and clients, leveraging blockchain technology to ensure data integrity and traceability throughout the sales lifecycle.`
        }
      ]
    }
  ]
  private currentState: any
  constructor(private router: Router) {
    const navigation: any = this.router.getCurrentNavigation();
    this.currentState = navigation?.extras.state;
  }

  ngAfterViewInit(): void {
    const scrollSectionId = `${this.currentState.projectsFor}-projects`
    this.scrollToSection(scrollSectionId)
  }

  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
