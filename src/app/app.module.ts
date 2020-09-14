import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginserviceService } from './loginservice.service';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductoadminComponent } from './productoadmin/productoadmin.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ReporteComponent } from './reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,routingComponents, AdminComponent, NotFoundComponent, ProductoadminComponent,ProductoDetailComponent, BarComponent, PieComponent,
    ScatterComponent,BarComponent,PieComponent,ScatterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
