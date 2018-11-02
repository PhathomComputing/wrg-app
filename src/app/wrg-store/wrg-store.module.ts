import { NgModule } from '@angular/core';

import { WrgNavComponent } from './wrg-nav/wrg-nav.component';
import { WrgBannerComponent } from './wrg-banner/wrg-banner.component';
import { WrgBodyComponent } from './wrg-body/wrg-body.component';
import { WrgFooterComponent } from './wrg-footer/wrg-footer.component';
import { WrgGridComponent } from './wrg-body/wrg-grid/wrg-grid.component';
import { WrgHomeComponent } from './wrg-body/wrg-home/wrg-home.component';
import { WrgSearchComponent } from './wrg-body/wrg-search/wrg-search.component';
import { WrgStoreRouting } from './wrg-store-routing.module';
import { WrgGridItemComponent } from './wrg-body/wrg-grid/wrg-grid-item/wrg-grid-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from '../shared/directives/dropdown.directive';


@NgModule({
    exports:[
        WrgNavComponent,
        WrgBannerComponent,
        WrgBodyComponent,
        WrgFooterComponent,
        WrgGridComponent,
        WrgHomeComponent,
        WrgSearchComponent
    ],
    declarations: [
        WrgNavComponent,
        WrgBannerComponent,
        WrgBodyComponent,
        WrgFooterComponent,
        WrgGridComponent,
        WrgHomeComponent,
        WrgSearchComponent,
        WrgGridItemComponent,
        DropdownDirective
    ],
    imports: [
        WrgStoreRouting,
        BrowserModule,
        
    ],
    providers: []
})
export class WrgStoreModule {}