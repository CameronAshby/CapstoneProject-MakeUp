import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopPage } from './shop.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPage,
    children: [
      {
        path: 'product',
        children: [
          {
            path: '',
            loadChildren: './shop/product/product.module#ProductPageModule'
          }
        ]
      },
      {
        path: 'brand',
        children: [
          {
            path: '',
            loadChildren: './shop/brand/brand.module#BrandPageModule'
          }
        ]
      },
      {
        path: 'qualities',
        children: [
          {
            path: '',
            loadChildren: './shop/qualities/qualities.module#QualitiesPageModule'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: './shop/search/search.module#SearchPageModule'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopPage]
})
export class ShopPageModule {}
