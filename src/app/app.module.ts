import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { ConsultaComponent } from './views/consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroComponent,
    ConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
