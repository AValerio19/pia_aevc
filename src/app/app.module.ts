import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Etapa2Component } from './etapa2/etapa2.component';
import { ClasesComponent } from './etapa2/clases/clases.component';
import { ContadorComponent } from './etapa2/contador/contador.component';
import { ElseComponent } from './etapa2/else/else.component';
import { NgForComponent } from './etapa2/ng-for/ng-for.component';
import { PlantillaComponent } from './etapa2/plantilla/plantilla.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Plantilla2Component } from './etapa3/plantilla2/plantilla2.component';

@NgModule({
  declarations: [
    AppComponent,
    Etapa2Component,
    ClasesComponent,
    ContadorComponent,
    ElseComponent,
    NgForComponent,
    PlantillaComponent,
    Plantilla2Component,
    PropiedadesComponent,
    Etapa3Component,
    FormulariosReactivosComponent,
    HijoComponent,
    Hijo2Component,
    Hijo3Component,
    IndexComponent,
    PadreComponent,
    Padre2Component,
    Padre3Component,
    ValidacionesComponent,
    Etapa4Component,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
