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
            loadChildren: './product/product.module#ProductPageModule'
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                loadChildren: './product/product.module#ProductPageModule'
              }
            ]
          }
        ]
      },
      {
        path: 'brand',
        children: [
          {
            path: '',
            loadChildren: './brand/brand.module#BrandPageModule'
          },
          {
            path: ':id',
            loadChildren: './brand/brand.module#BrandPageModule'
          }
        ]
      },
      {
        path: 'qualities',
        children: [
          {
            path: '',
            loadChildren: './qualities/qualities.module#QualitiesPageModule'
          },
          {
            path: ':id',
            loadChildren: './qualities/qualities.module#QualitiesPageModule'
          }
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: './search/search.module#SearchPageModule'
          }
        ]
      },
      {
        path: 'product-page',
        children: [
          {
            path: '',
            loadChildren: './product-page/product-page.module#ProductPagePageModule'
          },
          {
            path: ':id',
            loadChildren: './product-page/product-page.module#ProductPagePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/shop/product',
        pathMatch: 'full'
      }
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
