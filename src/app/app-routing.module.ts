import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PedidoDetailComponent } from './pedido-detail/pedido-detail.component';
import { PedidoListComponent } from './pedido-list/pedido-list.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'producto', component: ProductosListComponent},
  {path: 'pedidos', component: PedidoListComponent},
  {path: 'pedidos/:id', component: PedidoDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'form', component: FormComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ProductosListComponent,PedidoListComponent,PedidoListComponent,LoginComponent,SignupComponent,FormComponent,PedidoDetailComponent,AdminComponent,NotFoundComponent]