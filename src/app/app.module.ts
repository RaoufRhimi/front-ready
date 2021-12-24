import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AlfrescoWorkComponent } from './alfresco-work/alfresco-work.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
    EditComponent,
    EditProductComponent,
    AlfrescoWorkComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,


    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
