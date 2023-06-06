import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Medication {
  medication
}

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseUrl = 'http://localhost:9092/medications';


  constructor(private http: HttpClient) { }

  createMedication(medication: Medication): Observable<any> {
    return this.http.post<any>(`{this.baseUrl}`, medication);

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

}
