import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { InstagramComponent } from './home/instagram/instagram.component';
import { SentimentsComponent } from './home/sentiments/sentiments.component';
import { GenderComponent } from './home/gender/gender.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideBarComponent,
    InstagramComponent,
    SentimentsComponent,
    GenderComponent,
    
    
    
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
