import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../medication.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  constructor(private medicationService: MedicationService) {}

  ngOnInit(): void {
    this.medicationService.getMedication(1).subscribe(
      response => {
        // Handle the response data
      },
      error => {
        // Handle the error
      }
    );
  }

  

}
