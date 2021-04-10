import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./components/user-management/user-management.module`)
  .then(module => module.UserManagementModule) },
  /* { path: 'register',  loadChildren: () => import(`./components/user-management/user-management.module`)
    .then(module => module.UserManagementModule) }, */
  { path: 'principal', loadChildren: () => import(`./components/principal/principal.module`).then(module => module.PrincipalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
