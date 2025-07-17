import { Routes } from '@angular/router';
import { Experience } from '../experience/experience';
import { BaseHome } from '../base-home/base-home';
import { Projects } from '../projects/projects';
import { AboutPage } from '../about-page/about-page';

export const routes: Routes = [
    { path: '', component: BaseHome },
    { path: 'experience', component: Experience },
    { path: 'projects', component: Projects },
    { path: 'about', component: AboutPage },
    { path: '**', redirectTo: '' }
];
