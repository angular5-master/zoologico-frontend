import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';

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

    // Ruta de Error
    { path: '**', component: HomeComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);