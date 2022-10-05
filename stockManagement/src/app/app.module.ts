import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from './components/navbar/navbar.module';

import { DataTableModule } from './components/data-table/data-table.module';
import { AuthComponent } from './pages/auth/auth.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [AppComponent, AuthComponent, AdminComponent],
  imports: [
    MatPaginatorModule,
    DataTableModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
