import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistutoPage } from './registuto.page';

const routes: Routes = [
  {
    path: '',
    component: RegistutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistutoPageRoutingModule {}
