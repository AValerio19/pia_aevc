import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Etapa2Component } from './etapa2/etapa2.component';
import { ClasesComponent } from './etapa2/clases/clases.component';
import { ContadorComponent } from './etapa2/contador/contador.component';
import { ElseComponent } from './etapa2/else/else.component';
import { NgForComponent } from './etapa2/ng-for/ng-for.component';
import { PlantillaComponent } from './etapa2/plantilla/plantilla.component';
import { Plantilla2Component } from './etapa3/plantilla2/plantilla2.component';
import { PropiedadesComponent } from './etapa2/propiedades/propiedades.component';
import { Etapa3Component } from './etapa3/etapa3.component';
import { FormulariosReactivosComponent } from './etapa3/formularios-reactivos/formularios-reactivos.component';
import { HijoComponent } from './etapa3/hijo/hijo.component';
import { Hijo2Component } from './etapa3/hijo2/hijo2.component';
import { IndexComponent } from './etapa3/index/index.component';
import { PadreComponent } from './etapa3/padre/padre.component';
import { Padre2Component } from './etapa3/padre2/padre2.component';
import { ValidacionesComponent } from './etapa3/validaciones/validaciones.component';
import { Etapa4Component } from './etapa4/etapa4.component';
import { Hijo3Component } from './etapa4/hijo3/hijo3.component';
import { Padre3Component } from './etapa4/padre3/padre3.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'etapa2',
    component: Etapa2Component,
    children: [
      { path: 'et2-clases', component: ClasesComponent },
      { path: 'et2-contador', component: ContadorComponent },
      { path: 'et2-else', component: ElseComponent },
      { path: 'et2-ngfor', component: NgForComponent },
      { path: 'et2-plantilla', component: PlantillaComponent },
      { path: 'et2-propiedades', component: PropiedadesComponent },
    ],
  },
  {
    path: 'etapa3',
    component: Etapa3Component,
    children: [
      { path: 'et3-forms', component: FormulariosReactivosComponent },
      { path: 'et3-hijo', component: HijoComponent },
      { path: 'et3-hijo2', component: Hijo2Component },
      { path: 'et3-index', component: IndexComponent },
      { path: 'et3-padre', component: PadreComponent },
      { path: 'et3-padre2', component: Padre2Component },
      { path: 'et3-plantilla2', component: Plantilla2Component },
      { path: 'et3-validaciones', component: ValidacionesComponent },
    ],
  },
  {
    path: 'etapa4',
    component: Etapa4Component,
    children: [
      { path: 'et4-hijo3', component: Hijo3Component },
      { path: 'et4-padre3', component: Padre3Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
