import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreatUserComponent } from './creat-user/creat-user.component';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeliveryAgenciesListComponent } from './delivery-agencies-list/delivery-agencies-list.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { EditAgencyComponent } from './edit-agency/edit-agency.component';
import { InConfirmationComponent } from './in-confirmation/in-confirmation.component';
import { InPreparationComponent } from './in-preparation/in-preparation.component';
import { DispatchingComponent } from './dispatching/dispatching.component';
import { ShippingComponent } from './shipping/shipping.component';
import { DeliveredComponent } from './delivered/delivered.component';
import { ReturnedComponent } from './returned/returned.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreatUserComponent,
    EditUserComponent,
    ProductsListComponent,
    CreateProductComponent,
    EditProductComponent,
    DeliveryAgenciesListComponent,
    AddAgencyComponent,
    EditAgencyComponent,
    InConfirmationComponent,
    InPreparationComponent,
    DispatchingComponent,
    ShippingComponent,
    DeliveredComponent,
    ReturnedComponent,
    CancelledComponent,
    AddOrderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
