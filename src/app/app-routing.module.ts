import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { NetworkComponent } from './network/network.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  { path: ``, redirectTo: `home`, pathMatch:`full` },
  { path: `home`, canActivate:[AuthGuard], component: HomeComponent },
  { path: `movies`, canActivate:[AuthGuard], component: MoviesComponent },
  { path: `tv`, canActivate:[AuthGuard], component: TvComponent },
  { path: `people`, canActivate:[AuthGuard], component: PeopleComponent },
  { path: `about`, canActivate:[AuthGuard], component: AboutComponent },
  { path: `network`, canActivate:[AuthGuard], component: NetworkComponent },
  { path: `moviedetails/:id`, canActivate:[AuthGuard], component: MovieDetailsComponent },
  { path: `tvdetalis/:id` ,canActivate:[AuthGuard], component:TvDetailsComponent},
  { path: `artistDetails/:id` ,canActivate:[AuthGuard], component:ArtistDetailsComponent},
  { path: `register`, component: RegisterComponent },
  { path: `login`, component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
