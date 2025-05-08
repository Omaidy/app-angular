import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './comp-header.component.html',
  styleUrls: ['./comp-header.component.css']
})
export class CompHeaderComponent {
}
