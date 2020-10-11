import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';
import { SearchControlsComponent } from './search-controls/search-controls.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-control',
    pathMatch: 'full'
  },
  {
    path: 'search-control',
    component: SearchControlsComponent
  },
  {
  path: 'search-details',
  component: SearchResultsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
