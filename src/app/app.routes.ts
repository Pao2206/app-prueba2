import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { GestionUsersComponent } from './pages/gestion-users/gestion-users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NuevaOrdenComponent } from './pages/nueva-orden/nueva-orden.component';
import { EditarUserComponent } from './pages/editar-user/editar-user.component';
import { NuevoUserComponent } from './pages/nuevo-user/nuevo-user.component';
import { meseroGuard } from './guards/mesero.guard';
import { adminGuard } from './guards/admin.guard';


export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'ordenes', component: OrdenesComponent, canActivate: [meseroGuard]},
    { path: 'gestionUsers', component: GestionUsersComponent, canActivate: [adminGuard] },
    { path: 'nueva-orden/:idOrden', component: NuevaOrdenComponent, canActivate: [meseroGuard] },
    { path: 'editar-user/:idUser', component: EditarUserComponent, canActivate: [adminGuard]  },
    { path: 'nuevo-user/:idUser', component: NuevoUserComponent, canActivate: [adminGuard]  },

    { path: '', redirectTo: 'home' ,  pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
