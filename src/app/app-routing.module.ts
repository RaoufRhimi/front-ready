import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlfrescoWorkComponent } from './alfresco-work/alfresco-work.component';
import { CategoryComponent } from './category/category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditComponent } from './edit/edit.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
//import { AuthGuard } from './utility/app.guard';
//import { AuthGuard } from './utility/app.guard';
//import { AuthGuard } from './utility/app.guard';

const routes: Routes = [

  {path: '',component:SigninComponent},
  {path: 'category',component:CategoryComponent},
  {path: 'products/:id',component: ProductsComponent},
  {path: 'edit/:id',component:EditComponent},
  {path: 'edit_product/:id',component:EditProductComponent},
  {path:'alfresco',component:AlfrescoWorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
