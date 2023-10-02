import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchComponent},
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
