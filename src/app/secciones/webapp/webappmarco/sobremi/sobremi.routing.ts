import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobremiComponent } from './componentes/sobremi.component';

/* probamos borrar cualquier cosa fin  */
const routes: Routes = [
    {
        path: '', component: SobremiComponent
    }, /*  data: {animation: 'sobremi'}  */
];

/* export const routing = RouterModule.forRoot(appRoutes); */ 
@NgModule({
    imports:[
        RouterModule.forChild(routes),
        /* SidebarModule.forRoot(), */ 
    ],
    exports:[RouterModule],
})

export class SobremiRoutingModule{}