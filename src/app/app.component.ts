import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { ChatbotComponent } from './shared/chatbot/chatbot.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavbarComponent, ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // ...
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,  // Animation duration in ms
        once: false,    // Animate on each scroll into view
        mirror: true,   // Animate out when scrolling past elements
      });
    }
  }
}
