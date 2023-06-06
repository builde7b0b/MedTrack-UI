import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Medication {
  medicationId: any;
  name: string;
  quantity?: number;
  expirationDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseUrl = 'http://localhost:9092/medications';


  constructor(private http: HttpClient) { }

  createMedication(medication: Medication): Observable<any> {
    return this.http.post(`${this.baseUrl}`, medication);

  }

  getMedication(medicationId: number) {
  return this.http.get(`${this.baseUrl}/${medicationId}`).pipe(
    tap(response => {
      console.log(response);
      console.log(medicationId);
      // Handle the response and display the medication
      console.log('Medication:', response);
    })
    );
  }

  getMedications(){
    return this.http.get(`${this.baseUrl}`).pipe(
      tap(response => {
        console.log(response);
        // Handle the response and display the medication
        
      })
      );
  }



}
