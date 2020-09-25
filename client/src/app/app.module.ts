import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntityInputComponent } from './components/entity-input/entity-input.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        EntityInputComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
