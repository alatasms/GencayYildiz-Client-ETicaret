import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
//child rotaları burada nihai hale getirip buraya route olarak ekleyeceğiz.
const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [ //LayoutComponent'in alt componentlerini burada bildiriyoruz.
      { path: "", component: DashboardComponent },//admin'den sonra herhangi bir şey yazılmaz ise DashboardComponentine yönlendirecek.
      { path: "customers", loadChildren: () => import("./admin/components/customer/customer.module").then(module => module.CustomerModule) },//wwww....addfs.com/admin/customers gelir ise bu module yönlendir.
      { path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule) },
      { path: "orders", loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule) }//admin sonrası orders gelirse ilgili modul çağrılarak o modul çindeki route kurallarına göre devam edecektir.
    ]
  },
  { path: "", component: HomeComponent },
  { path: "baskets", loadChildren: () => import("./ui/components/baskets/baskets.module").then(module => module.BasketsModule) },
  { path: "products", loadChildren: () => import("./ui/components/products/products.module").then(module => module.ProductsModule) },
  { path: "register", loadChildren: () => import("./ui/components/register/register.module").then(module => module.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
