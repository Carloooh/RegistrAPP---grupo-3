import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './guard/guardian.guard';
import { NotfoundPage } from './Pages/notfound/notfound.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./Pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./Pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [GuardianGuard]
  },
  {
    path: 'notfound',
    loadChildren: () => import('./Pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  {
    path: '**', component: NotfoundPage, pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
