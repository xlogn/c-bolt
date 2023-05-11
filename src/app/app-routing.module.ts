import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { DevicesComponent } from './devices/devices.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'certificates', component: CertificatesComponent  },
  { path: 'downloads', component: DownloadsComponent  },
  { path: 'profile', component: ProfileComponent  }
  // Add routes for other components
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
