import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';
import { SearchControlsComponent } from './search-controls/search-controls.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NoDataComponent } from './no-data/no-data.component';
import { LoaderComponent } from './loader/loader.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchWrapperComponent,
    SearchControlsComponent,
    SearchResultsComponent,
    NoDataComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
