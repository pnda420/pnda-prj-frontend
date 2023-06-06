import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';

const routes: Routes = [
  { path: '', redirectTo: '/startseite', pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  { path: 'einstellungen', component: EinstellungenComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
