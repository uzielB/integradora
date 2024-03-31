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
    redirectTo: 'login',
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
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logusuario',
    loadChildren: () => import('./logusuario/logusuario.module').then( m => m.LogusuarioPageModule)
  },
  {
    path: 'logadmin',
    loadChildren: () => import('./logadmin/logadmin.module').then( m => m.LogadminPageModule)
  },
  {
    path: 'registro-a',
    loadChildren: () => import('./registro-a/registro-a.module').then( m => m.RegistroAPageModule)
  },
  {
    path: 'inscribirse',
    loadChildren: () => import('./inscribirse/inscribirse.module').then( m => m.InscribirsePageModule)
  },
  {
    path: 'horarios',
    loadChildren: () => import('./horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'tutoadmin',
    loadChildren: () => import('./tutoadmin/tutoadmin.module').then( m => m.TutoadminPageModule)
  },
  {
    path: 'registuto',
    loadChildren: () => import('./registuto/registuto.module').then( m => m.RegistutoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
