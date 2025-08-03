import { Component, OnInit } from '@angular/core';
import { materialImports } from '../shared/material';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [materialImports, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  skillSets = [{
    type: 'Languages',
    skillsForType: [
      { skill: 'JavaScript',logoPath:'assets/js-logo.png', level: '80', curentValue: 0 },
      { skill: 'TypeScript',logoPath:'assets/ts-logo.png', level: '85', curentValue: 0 },
      { skill: 'HTML',logoPath:'assets/html-logo.png', level: '90', curentValue: 0 },
    ]
  },
  {
    type: 'Styling',
    skillsForType: [
      { skill: 'CSS',logoPath:'', level: '90', curentValue: 0 },
      { skill: 'SCSS',logoPath:'', level: '90', curentValue: 0 },
      { skill: 'Tailwind',logoPath:'', level: '70', curentValue: 0 },
      { skill: 'Material',logoPath:'', level: '90', curentValue: 0 },
      { skill: 'Bootstrap',logoPath:'', level: '90', curentValue: 0 },
    ]
  },
  {
    type: 'Frontend Frmeworks',
    skillsForType: [
      { skill: 'Angular (v2-15)',logoPath:'', level: '95', curentValue: 0 },
      { skill: 'React JS',logoPath:'', level: '60', curentValue: 0 },
    ]

  },
  {
    type: 'Stete Management',
    skillsForType: [
      { skill: 'RxJS',logoPath:'', level: '90', curentValue: 0 },
      { skill: 'NgRx',logoPath:'', level: '75', curentValue: 0 },
      { skill: 'Redux Toolkit',logoPath:'', level: '60', curentValue: 0 },
    ]
  },
  {
    type: 'Testing',
    skillsForType: [
      { skill: 'Jest',logoPath:'', level: '80', curentValue: 0 },
      { skill: 'Jasmine',logoPath:'', level: '85', curentValue: 0 },
      { skill: 'karma',logoPath:'', level: '90', curentValue: 0 },
    ]
  },
  {
    type: 'Version Control & CI/CD',
    skillsForType: [
      { skill: 'Git',logoPath:'', level: '90', curentValue: 0 },
      { skill: 'GitHub Actions',logoPath:'', level: '85', curentValue: 0 },
      { skill: 'Azure Devops',logoPath:'', level: '75', curentValue: 0 },
      { skill: 'Jira',logoPath:'', level: '90', curentValue: 0 },
    ]
  },
  {
    type: 'Backend',
    skillsForType: [
      { skill: 'Java (Spring Boot)',logoPath:'', level: '50', curentValue: 0 },
      { skill: 'Node JS',logoPath:'', level: '60', curentValue: 0 },
    ]
  }
  ]
  value = 0
  ngOnInit(): void {
    setTimeout(() => {
      this.value = 80
    }, 1000)
  }

}
