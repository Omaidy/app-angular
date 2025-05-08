import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './comp-footer.component.html',
  styleUrls: ['./comp-footer.component.css']
})
export class CompFooterComponent {
  currentYear: number = new Date().getFullYear();
}
