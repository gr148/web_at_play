import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StemSiteHeaderComponent } from "./stem-site-header/stem-site-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StemSiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'web_at_play';
}
