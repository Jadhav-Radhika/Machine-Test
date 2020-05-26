import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooterComponent} from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { OffersComponent } from './Components/offers/offers.component';
import { CustomerReviewComponent } from './Components/customer-review/customer-review.component';


const routes: Routes = [
  /*{
    path:'',
    component:FooterComponent
  },*/
   
  {
    path:'home',
    component:HeaderComponent
  },
  { path:'offers', component:OffersComponent},
  { path:'customer-review', component:CustomerReviewComponent},
  { path:'footer', component:FooterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
