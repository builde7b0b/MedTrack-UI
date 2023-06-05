import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  private baseUrl = 'http://localhost:9092';


  constructor(private http: HttpClient) { }

  createMedication(){

  }

  getMedication(medicationId: number){
    return this.http.get(`${this.baseUrl}/${medicationId}`)
  }
}
