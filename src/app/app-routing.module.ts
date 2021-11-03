import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tipoitemCreateComponent } from './components/views/tipoitem/tipoitem-create/tipoitem-create.component';
import { tipoitemDeleteComponent } from './components/views/tipoitem/tipoitem-delete/tipoitem-delete.component';
import { tipoitemReadComponent } from './components/views/tipoitem/tipoitem-read/tipoitem-read.component';
import { tipoitemUpdateComponent } from './components/views/tipoitem/tipoitem-update/tipoitem-update.component';
import { HomeComponent } from './components/views/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tipoitens',
    component: tipoitemReadComponent
  },
  {
    path: 'tipoitens/create',
    component: tipoitemCreateComponent
  },
  {
    path: 'tipoitens/delete/:id',
    component: tipoitemDeleteComponent
  },
  {
    path: 'tipoitens/update/:id',
    component: tipoitemUpdateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
