import { Component } from '@angular/core';
import { ImageComponent } from './image/image.component';
import ButtonComponent from 'src/stories/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storyApp';
}
