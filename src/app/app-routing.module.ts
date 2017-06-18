import { SignupRepresentativeComponent } from './representative/signup-representative/signup-representative.component';
import { EditProfileComponent } from './representative/edit-profile/edit-profile.component';
import { ProfileComponent } from './representative/profile/profile.component';
import { SelectServicesComponent } from './select-services/select-services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'select-services', component: SelectServicesComponent },
    { path: 'home-rep', component: ProfileComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'app-signup-representative', component: SignupRepresentativeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
