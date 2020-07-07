import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list/wish-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    WishListComponent,
    WishListItemComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
