import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { EventService } from './shared/services/services/EventService';

@NgModule({
  declarations: [
    AppComponent,
      ],
  imports: [
    BrowserModule,
    WishModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
