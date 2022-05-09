import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrettyJsonPipe } from './pipes/pretty-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrettyJsonPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
