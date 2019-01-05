import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/shared/rental.model';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentals: Rental[] = [
    {
      id: 1,
      name: 'Arun',
    },
    {
      id: 2,
      name: 'Ap',
    },
    {
      id: 3,
      name: 'Ajith',
    },
  ];
  getRentals(): Observable<Rental[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error('error happended');
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
  }

  getRentalById(rentalId: number): Observable<Rental> {
    return new Observable((observer) => {
      setTimeout(() => {
        const currentSelectedRental = this.rentals.find((rental) => {
            console.log(rental.id);
            return rental.id == rentalId;
        });
        console.log(currentSelectedRental);
        observer.next(currentSelectedRental);
      }, 1000);

    });
  }
  constructor() { }
}
