import{ Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistaComponent } from "./components/artista/artista.component";
//establecemos las rutas
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'artist/:id', component: ArtistaComponent},
    //cualquier otro path vacio me direccionara a home
    { path: ' ', pathMatch: 'full', redirectTo: 'home'},
    //cualquier otro path me direccionara a home
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
]