import { CreateProductComponent } from './create-product/create-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DeliveryAgenciesListComponent } from './delivery-agencies-list/delivery-agencies-list.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { InConfirmationComponent } from './in-confirmation/in-confirmation.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { InPreparationComponent } from './in-preparation/in-preparation.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'create-user', component: CreatUserComponent},
  {path:'users', component: UserListComponent},
  {path:'users/:username', component: EditUserComponent},
  {path:'products', component: ProductsListComponent},
  {path:'products/:productId', component: EditProductComponent},
  {path:'create-product',component: CreateProductComponent},
  {path:'agencies-list', component: DeliveryAgenciesListComponent},
  {path:'add-agency', component: AddAgencyComponent},
  {path:'in-confirmation', component: InConfirmationComponent},
  {path:'in-preparation', component: InPreparationComponent},
  {path:'add-order', component: AddOrderComponent},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo: 'in-confirmation', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
