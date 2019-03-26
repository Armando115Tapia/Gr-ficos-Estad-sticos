
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
@NgModule({

    imports: [ CommonModule ,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule

    ],
    exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule
    ],
    providers: [],
})
export class MeterialModule {}
