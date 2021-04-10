import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponentsRoutingModule } from './principal-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
// Components
import { ShipsComponent } from './ships/ts/ships.component';
import { PageOneComponent } from './page-one/ts/page-one.component';
import { PageTwoComponent } from './page-two/ts/page-two.component';
import { ShipsDetailsComponent } from './ships/ships-details/ts/ships-details.component';

// Services
import { ShipsService } from 'src/app/services/ships/ships.service';


const DECLARATIONS = [
  ShipsComponent,
  ShipsDetailsComponent,
  PageOneComponent,
  PageTwoComponent
];

const IMPORTS = [
  CommonModule,
  PrincipalComponentsRoutingModule,
  HttpClientModule,
  NgxPaginationModule
];

const PROVIDERS = [
  ShipsService
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS
})
export class PrincipalModule { }
