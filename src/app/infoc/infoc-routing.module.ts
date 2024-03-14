import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocPage } from './infoc.page';

const routes: Routes = [
  {
    path: '',
    component: InfocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocPageRoutingModule {}
