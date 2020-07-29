import { Component, IterableDiffers } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Welcome to {{title}}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Kaci's To Do List";
}
