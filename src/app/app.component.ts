import { Component, IterableDiffers } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!
    </h1>

    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo-list';
}
