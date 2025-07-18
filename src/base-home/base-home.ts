import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { materialImports } from '../shared/material';

@Component({
  selector: 'app-base-home',
  imports: [materialImports],
  templateUrl: './base-home.html',
  styleUrl: './base-home.scss'
})
export class BaseHome implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

    ngAfterViewInit(): void {
    const videoEl = this.bgVideo.nativeElement;
    videoEl.muted = true;
    videoEl.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }

}
