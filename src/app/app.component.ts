import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompHeaderComponent } from './comp-header/comp-header.component';
import { CompFooterComponent } from './comp-footer/comp-footer.component';
import { CompFormComponent } from './comp-form/comp-form.component';
import { CompPipesComponent } from './comp-pipes/comp-pipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CompHeaderComponent,
    CompFooterComponent,
    CompFormComponent,
    CompPipesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
}
