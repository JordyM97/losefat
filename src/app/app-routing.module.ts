import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CreaarProductoComponent } from './creaar-producto/creaar-producto.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path: 'producto', component: ProductosListComponent},
  {path: 'producto/', component: ProductoDetailComponent},
  {path: '', component: NewsComponent},
  {path: 'crear', component: CreaarProductoComponent},
  {path: 'pedidos', component: PedidoListComponent},
  {path: 'pedidos/:id', component: PedidoDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'noAccess', component: NoAccessComponent},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ProductosListComponent,NoAccessComponent,PedidoListComponent,PedidoListComponent,LoginComponent,SignupComponent,FormComponent,PedidoDetailComponent,AdminComponent,NotFoundComponent]