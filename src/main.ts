import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

import 'zone.js';

import { AquilaModule } from './app/aquila.module';
import { ExampleComponent } from './app/example.component';

@NgModule({
  bootstrap: [ExampleComponent],
  declarations: [ExampleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AquilaModule,
    NgOptimizedImage,
  ],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/**  Copyright ALLIANZ 2023 */
