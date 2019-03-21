import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-page',
    pathMatch: 'full'
  },
  {
    path: 'welcome-page',
    loadChildren: './welcome-page/welcome-page.module#WelcomePagePageModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'cart',
    loadChildren: './cart/cart.module#CartPageModule'
  },
  {
    path: 'shop',
    loadChildren: './shop/shop.module#ShopPageModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: '**',
    redirectTo: 'welcome-page'
  },
  { path: 'brand', loadChildren: './shop/brand/brand.module#BrandPageModule' },
  { path: 'product', loadChildren: './shop/product/product.module#ProductPageModule' },
  { path: 'product/:id', loadChildren: './shop/product/product.module#ProductPageModule' },
  { path: 'qualities', loadChildren: './shop/qualities/qualities.module#QualitiesPageModule' },
  { path: 'search', loadChildren: './shop/search/search.module#SearchPageModule' },
  { path: 'product-page', loadChildren: './shop/product-page/product-page.module#ProductPagePageModule' },
  { path: 'product-page/:id', loadChildren: './shop/product-page/product-page.module#ProductPagePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
