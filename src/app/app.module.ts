import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent} from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { LoanComponent } from './loan/loan.component';
import { LoanSuccessComponent } from './loan/loan.success.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    LoanSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccountModule,
    MatMenuModule,
    MatButtonModule

  ],
  providers: [ AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
