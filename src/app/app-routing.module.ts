import { ProfileComponent } from './representative/profile/profile.component';
import { SelectServicesComponent } from './select-services/select-services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'select-services', component: SelectServicesComponent },
    { path: 'home-rep', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
