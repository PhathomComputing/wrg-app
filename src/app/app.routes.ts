import {Routes, RouterModule } from '@angular/router';

import { WrgDashComponent } from './wrg-dash/wrg-dash.component';
import { WrgStoreComponent } from './wrg-store/wrg-store.component';
import { WrgBodyComponent } from './wrg-store/wrg-body/wrg-body.component';

export const rootRouterConfig: Routes = [
    {
        path:'store',
        component: WrgBodyComponent,
        loadChildren: './wrg-store/wrg-store.module#WrgStoreModule'
    },
    {
        path:'dash',
        component:WrgDashComponent
    },
    {
        path: "**",
        redirectTo:'store'
    }
];
