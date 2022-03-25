import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { CorsComponent } from './views/cors/cors.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'cors',
    component: CorsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
