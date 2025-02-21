import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StemSiteHomeComponent } from './stem-site-home/stem-site-home.component';

export const routes: Routes = [
    {path: '', component: StemSiteHomeComponent},
    {path: 'home', component: StemSiteHomeComponent},
    {path: '**', redirectTo: ''}, // redirect invalid routes

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{}