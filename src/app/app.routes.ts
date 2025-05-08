import { Routes } from '@angular/router';
import { CompFormComponent } from './comp-form/comp-form.component';
import { CompPipesComponent } from './comp-pipes/comp-pipes.component';
import { CompHomeComponent } from './comp-home/comp-home.component';

export const routes: Routes = [
  { path: 'home', component: CompHomeComponent },
  { path: 'forms', component: CompFormComponent },
  { path: 'pipes', component: CompPipesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirige a home por defecto
];
