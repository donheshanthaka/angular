import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';

export const routes: Routes = [
    {path: '', component: FirstComponent},
    {path: 'second', component: SecondComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductslistComponent},
    {path: 'products/:id', component: ProductdetailsComponent},
    {path: '**', component: NotFoundComponent}
];
