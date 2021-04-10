import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from './ships/ts/ships.component';
import { PageOneComponent } from './page-one/ts/page-one.component';
import { PageTwoComponent } from './page-two/ts/page-two.component';
import { PrincipalComponent } from './ts/principal.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent,
  children: [
    { path: 'ships', component: ShipsComponent },
    { path: 'pageOne', component: PageOneComponent },
    { path: 'pageTwo', component: PageTwoComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalComponentsRoutingModule { }
