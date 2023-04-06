import { Routes, RouterModule } from '@angular/router';
import { RegistrarHeladoComponent } from './componentes/registrar-helado.component';

const routes: Routes = [
  { 
    path: 'registrarHelado', component: RegistrarHeladoComponent
  },
];

export const RegistrarHeladoRoutes = RouterModule.forChild(routes);
