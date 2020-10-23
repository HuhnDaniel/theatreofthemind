import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntityInputComponent } from './components/entity-input/entity-input.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        EntityInputComponent,
        EntityListComponent,
        DisplayUserComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
