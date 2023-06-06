import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseUrl = 'http://localhost:9092/medications';


  constructor(private http: HttpClient) { }

  createMedication(){

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
