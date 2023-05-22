import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ProfileComponent } from './profile/profile.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    DevicesComponent,
    CertificatesComponent,
    DownloadsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
