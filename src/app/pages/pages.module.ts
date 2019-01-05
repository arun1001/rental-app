import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental/rental.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';
import { RentalService } from './rental/shared/rental.service';
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {
        path: '',
        component: RentalListComponent,
      },
      {
        path: ':rentalId',
        component: RentalDetailComponent,
      }
    ]
  }
];
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  exports: [
    RentalComponent,
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    RentalService,
  ]
})
export class PagesModule { }
