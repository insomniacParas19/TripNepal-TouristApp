import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';

export const routes: Routes = [
    {path: 'home', 'title': 'Home', component:HomeComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'login','title': 'Login', component: LoginComponent},
    {path: 'destination','title': 'Destination', component: DestinationComponent},
    {path: 'destination-details', 'title': 'DestinationDetails', component: DestinationDetailsComponent},
    {path: 'about', 'title': 'About', component: AboutComponent},
    {path: 'contact','title': 'Contact', component: ContactComponent},
    {path: 'footer', component: FooterComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', 'title': 'Error', component:PageNotFoundComponent}
]
