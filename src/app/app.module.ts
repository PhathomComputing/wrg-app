import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WrgDashComponent } from './wrg-dash/wrg-dash.component';
import { WrgStoreComponent } from './wrg-store/wrg-store.component';
import { rootRouterConfig } from './app.routes';
import { WrgStoreModule } from './wrg-store/wrg-store.module';
import { DebuggingService } from './shared/services/debugging.service';
import { UserService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { DashNavComponent } from './wrg-dash/dash-nav/dash-nav.component';
import { DashSidebarComponent } from './wrg-dash/dash-sidebar/dash-sidebar.component';
import { DashBodyComponent } from './wrg-dash/dash-body/dash-body.component';
import { WrgDashModule } from './wrg-dash/wrg-dash.module';
import { ProductService } from './shared/services/products.service';

@NgModule({
  exports:[
    AppComponent,
    WrgDashComponent,
    WrgStoreComponent,
    
    ],
  declarations: [
    AppComponent,
    WrgDashComponent,
    WrgStoreComponent,
    DashNavComponent,
    DashSidebarComponent,
    DashBodyComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WrgStoreModule,
    WrgDashModule,
    RouterModule.forRoot(rootRouterConfig, {useHash:false ,anchorScrolling: 'enabled', scrollPositionRestoration:'enabled'})

  ],
  providers: [DebuggingService,UserService,AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
