import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private readonly RESERVATION_DETAILS_KEY = 'reservationDetails';

  /*private reservationDetailsSubject: BehaviorSubject<{ postId: number, userId: number } | null> = new BehaviorSubject<{ postId: number, userId: number } | null>(null);
  reservationDetails$: Observable<{ postId: number, userId: number } | null> = this.reservationDetailsSubject.asObservable();
*/
  constructor() { }

  /*setReservationDetails(postId: number, userId: number) {
    this.reservationDetailsSubject.next({ postId, userId });
  }*/

/*  setReservationDetails(postId: number, userId: number) {
    const reservationDetails = { postId, userId };
    localStorage.setItem(this.RESERVATION_DETAILS_KEY, JSON.stringify(reservationDetails));
  }*/

  setReservationDetails(postId: number, userId: number) {
    const reservationDetails = { postId, userId };
    localStorage.setItem(`${this.RESERVATION_DETAILS_KEY}_${postId}`, JSON.stringify(reservationDetails));
  }
  getReservationDetails(): { postId: number, userId: number } | null {
    const reservationDetailsString = localStorage.getItem(this.RESERVATION_DETAILS_KEY);
    return reservationDetailsString ? JSON.parse(reservationDetailsString) : null;
  }

  /*hasReservationDetails(postId: number | undefined): boolean {
    return this.reservationDetailsSubject.value !== null && this.reservationDetailsSubject.value.postId === postId;
  }*/

  hasReservationDetails(postId: number | undefined): boolean {
    const reservationDetailsString = localStorage.getItem(`${this.RESERVATION_DETAILS_KEY}_${postId}`);
    return !!reservationDetailsString;
  }

/*  hasReservationDetails(postId: number | undefined): boolean {
    const reservationDetailsString = localStorage.getItem(this.RESERVATION_DETAILS_KEY);
    if (reservationDetailsString) {
      const reservationDetails = JSON.parse(reservationDetailsString);
      return reservationDetails && reservationDetails.postId === postId;
    }
    return false;
  }*/

  clearReservationDetails() {
    localStorage.removeItem(this.RESERVATION_DETAILS_KEY);
  }

/*  getReservationDetails(): { postId: number, userId: number } | null {
    return this.reservationDetailsSubject.value;
  }*/

 /* clearReservationDetails() {
    this.reservationDetailsSubject.next(null);
  }*/


}
