import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrgGridComponent } from './wrg-body/wrg-grid/wrg-grid.component';
import { WrgHomeComponent } from './wrg-body/wrg-home/wrg-home.component';
import { WrgSearchComponent } from './wrg-body/wrg-search/wrg-search.component';
import { WrgBodyComponent } from './wrg-body/wrg-body.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'store/grid',
        pathMatch:'full'
    },
    {
        path:'store', component: WrgBodyComponent, children: [
            { path: 'grid', component: WrgGridComponent },
            { path: 'home', component: WrgHomeComponent },
            { path: 'search', component: WrgSearchComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WrgStoreRouting {}