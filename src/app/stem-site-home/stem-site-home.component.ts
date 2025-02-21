import { Component, HostListener } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stem-site-home',
  standalone: true,
  imports: [],
  templateUrl: './stem-site-home.component.html',
  styleUrl: './stem-site-home.component.css'
})
export class StemSiteHomeComponent {
  @ViewChild('followerImage') followerImage!: ElementRef;
  
  isFollowing = false;
  gifPath = '/assets/images/star_hope.gif'; // Replace with your GIF path

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isFollowing && this.followerImage) {
      const image = this.followerImage.nativeElement;
      image.style.left = `${event.clientX}px`;
      image.style.top = `${event.clientY}px`;
    }
  }
  toggleFollower(event: Event) {
    event.preventDefault();
    this.isFollowing = !this.isFollowing;
  }
}
