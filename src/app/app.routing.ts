import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare var jQuery:any;
declare var $:any;

// Component
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';


const appRoutes: Routes = [
    // Ruta por defecto
    { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    // Otras Rutas
    { path: 'animals', component: AnimalsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'keepers', component: KeepersComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mis-datos', component: UserEditComponent },
    { path: 'animal/:id', component: AnimalDetailComponent },

    // Ruta de Error
    { path: '**', component: HomeComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);