import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogusuarioPage } from './logusuario.page';

const routes: Routes = [
  {
    path: '',
    component: LogusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogusuarioPageRoutingModule {}
