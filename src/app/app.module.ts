import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, RouterOutlet, HeaderModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
