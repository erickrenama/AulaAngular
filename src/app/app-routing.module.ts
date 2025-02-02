import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { ListaCompraClienteComponent } from './cliente/lista-compra-cliente/lista-compra-cliente.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { FormTemplateDriveComponent } from './form-template-drive/form-template-drive.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ReservaViagensComponent } from './reserva-viagens/reserva-viagens.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'feature/:id', component: FeatureComponent },
  { path: 'diretiva', component: ExemploDiretivasComponent },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      { path: 'lista-cliente', component: ListaClienteComponent },
      { path: 'lista-compra', component: ListaCompraClienteComponent },
      { path: 'detalhe/:id', component: ClienteDetalheComponent },
    ],
  },
{path: 'form-template-drive', component: FormTemplateDriveComponent},
{path: 'form-reactive', component: FormReactiveComponent},
{path: 'aluno', component: AlunoComponent},
{path: 'reserva-viagens', component: ReservaViagensComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
