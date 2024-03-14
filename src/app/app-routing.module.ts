import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfocPage } from './infoc/infoc.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'infoc',
    component: InfocPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'deportiva',
    loadChildren: () => import('./deportiva/deportiva.module').then( m => m.DeportivaPageModule)
  },
  {
    path: 'cultural',
    loadChildren: () => import('./cultural/cultural.module').then( m => m.CulturalPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'infoc',
    loadChildren: () => import('./infoc/infoc.module').then( m => m.InfocPageModule)
  },
  {
    path: 'infod',
    loadChildren: () => import('./infod/infod.module').then( m => m.InfodPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }