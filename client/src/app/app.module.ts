import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntityInputComponent } from './components/entity-input/entity-input.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        EntityInputComponent,
        EntityListComponent,
        DisplayUserComponent,
        LogInModalComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
