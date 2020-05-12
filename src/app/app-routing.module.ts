import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'accomodation', component: AccomodationComponent},
    { path: 'celebrations', component: CelebrationsComponent},
    { path: 'food-and-beverage', component: FoodAndBeverageComponent},
    { path: 'lifestyle', component: LifestyleComponent},
    { path: 'weddings', component: WeddingsComponent},
    { path: 'offers', component: OffersComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent}
];

@NgModule ({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}