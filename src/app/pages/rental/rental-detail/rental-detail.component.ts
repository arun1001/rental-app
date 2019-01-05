import { Rental } from './../../../shared/rental.model';
import { RentalService } from './../shared/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  currentId: string;
  currentRental: Rental;
  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.currentId = params.rentalId;
        this.getCurrentRental(params.rentalId);
      });
  }

  getCurrentRental(rentalId: number) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental) => {
        this.currentRental = rental;
        console.log(rental);
      });
  }

}
