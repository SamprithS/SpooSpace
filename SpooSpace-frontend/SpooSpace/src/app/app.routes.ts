import { Routes } from '@angular/router';
import { MoodSelectionComponent } from './pages/mood-selection/mood-selection.page';
import { QuotesPageComponent } from './pages/quotes-page/quotes-page.page';

export const routes: Routes = [
  { path: '', component: MoodSelectionComponent },
  { path: 'quotes/:mood', component: QuotesPageComponent },
  { path: '**', redirectTo: '' }
];