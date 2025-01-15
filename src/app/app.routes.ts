import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ResultsComponent } from './results/results.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    
    {path:'app', component:AppComponent},
    {path:'home', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'features',component:FeaturesComponent},
    {path:'results',component:ResultsComponent},
    {path:'reviews',component:ReviewsComponent},
    {path:'appointment',component:AppointmentComponent},
    
    //{path: '**', component: PageNotFoundComponent }
];
