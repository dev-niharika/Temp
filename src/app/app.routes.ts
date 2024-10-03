import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { TeamComponent } from './team/team.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LandingPageComponent },
    {path:'about',component:AboutComponent},
    { path:'services',component:ServicesComponent},
    { path:'contact',component:ContactComponent},
    { path:'project',component:ProjectComponent},
    { path:'team',component:TeamComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
