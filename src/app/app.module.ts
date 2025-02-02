import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaCompraClienteComponent } from './cliente/lista-compra-cliente/lista-compra-cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { FormTemplateDriveComponent } from './form-template-drive/form-template-drive.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ReservaViagensComponent } from './reserva-viagens/reserva-viagens.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    AboutComponent,
    NotFoundComponent,
    ExemploDiretivasComponent,
    ClienteComponent,
    ListaClienteComponent,
    ListaCompraClienteComponent,
    ClienteDetalheComponent,
    FormTemplateDriveComponent,
    FormReactiveComponent,
    AlunoComponent,
    ReservaViagensComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
