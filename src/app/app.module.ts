import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ArstistaList } from './arstista-list/arstista-list';
import { AlbumListComponent } from './album/album-list/album-list.component';

@NgModule({
  declarations: [AppComponent, ArstistaList],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule
    ,AlbumListComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
