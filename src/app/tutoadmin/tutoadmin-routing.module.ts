import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutoadminPage } from './tutoadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TutoadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutoadminPageRoutingModule {}
