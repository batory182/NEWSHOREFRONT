import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { JourneyComponent } from './pages/journey/journey.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import * as fromJourney from './pages/store/journey.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JourneyEffects } from './pages/store/journey.effects';
import { DialogElementComponent } from './pages/dialog-element/dialog-element.component';

@NgModule({
  declarations: [AppComponent, JourneyComponent, DialogElementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(fromJourney.journeyFeatureKey, fromJourney.reducer),
    EffectsModule.forFeature([JourneyEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
