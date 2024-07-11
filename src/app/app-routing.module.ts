import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientiComponent } from './pages/lista-clienti/lista-clienti.component';
import { LoginComponent } from './pages/login/login.component';
import { BenvenutoComponent } from './pages/benvenuto/benvenuto.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreaClientiComponent } from './pages/crea-clienti/crea-clienti.component';
import { ModificaClientiComponent } from './pages/modifica-clienti/modifica-clienti.component';
import { DettagliClienteComponent } from './pages/dettagli-cliente/dettagli-cliente.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RouteGuardService } from 'src/services/route-guard.service';
import { OrdiniComponent } from './pages/ordini/ordini.component';

import { InventarioComponent } from './pages/inventario/inventario.component';

const routes: Routes = [
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'ordini', component: OrdiniComponent, canActivate: [RouteGuardService] },
  { path: 'benvenuto/:username', component: BenvenutoComponent, canActivate: [RouteGuardService] },
  { path: 'benvenuto', component: BenvenutoComponent, canActivate: [RouteGuardService] },
  { path: 'lista-clienti', component: ListaClientiComponent, canActivate: [RouteGuardService] },
  { path: 'crea-clienti', component: CreaClientiComponent,  canActivate: [RouteGuardService] },
  { path: 'dettagli-clienti/:idCli', component: DettagliClienteComponent, canActivate: [RouteGuardService] },
  { path: 'modifica-clienti/:idCli', component: ModificaClientiComponent, canActivate: [RouteGuardService] },
  { path: 'inventario', component: InventarioComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component : LogoutComponent},
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
