import { Component, OnInit } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../roles/RoleService';
import { MedicationService } from '../medication.service';
import { Medication } from '../medication.service';
import { Observer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';


export interface Recalls {
  name: string;
  quantity: number;
  expiration: number;
  supplier: string;
  
  
}

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})

export class InventoryManagementComponent {
  backendNotRunning = false;

  medications: Medication[] = []; // init the medications array

  newMedication: Medication = {
    medicationId: null,
    name: '',
    quantity: 0,
    expirationDate: new Date
  };

  userRole: string = '';

  typesOfShoes: String[] = ["Aspirin", "Tylenol", "albuterol", "RandomRx"];

  alertSettings: String[] = ["Set Alerts to ASAP", "Set Alerts to 'once per day'", "set alerts to twice per day", "Turn Alerts OFF"];

  // sortedData: any[] = [];
  
  recalls: Recalls[] = [
    {name: 'Hylenol', quantity: 20, expiration: 10 , supplier: "supplier" },
    {name: 'Galbuterol', quantity: 20, expiration: 10 , supplier: "supplier"},
    {name: 'epinim', quantity: 20, expiration: 10 , supplier: "supplier" },
    {name: 'healfas',quantity: 20, expiration: 10 , supplier: "supplier" },
    {name: 'healthPill', quantity: 20, expiration: 10 , supplier: "supplier" },
  ];
  sortedData: Recalls[];

  
createMedication() {
  
  
  const observer: Observer<any> = {
    next: (value: any) => {
      // Handle the next value
    },
    error: (error: any) => {
      // Handle the error
    },
    complete: () => {
      // Handle the completion
      console.log("SUCCESSFUL")
    }
  };
  
  this.medicationService.createMedication(this.newMedication).subscribe(observer)
  console.log(observer)
  this.medications.push(this.newMedication)
}


  constructor(private roleService: RoleService, private medicationService: MedicationService, private snackBar: MatSnackBar, private http: HttpClient ) {
    this.userRole = 'Technician';
    
    // Populating the data
    this.sortedData = [
      { name: 'Chocolate Cake', quantity: 20, expiration: 10 , supplier: "supplier" },
      { name: 'Strawberry Cheesecake', quantity: 20, expiration: 10 , supplier: "supplier" },
      { name: 'Vanilla Ice Cream', quantity: 20, expiration: 10 , supplier: "supplier" },
      // Add more dessert objects as needed
    ];
  }

  checkBackendStatus(): void {
    const backendUrl = 'http://your-backend-url/ping'; // Replace with your backend URL and endpoint
  
    this.http.get(backendUrl).subscribe(
      () => {
        // Backend is running, do nothing
      },
      () => {
        // Backend is not running, show notification
        this.showBackendNotRunningNotification();
      }
    );
  }
  

  showBackendNotRunningNotification(): void {
    this.snackBar.open('Backend is not running', 'Close', {
      duration: 5000,
      panelClass: 'error-notification'
    });
  }
  
  

  ngOnInit() {
    this.roleService.role$.subscribe(role => {
      this.userRole = role;
      // Perform any necessary actions based on the userRole
    });
    this.fetchMedications();
    this.userRole = '';
  }

  fetchMedications(): void {
    this.medicationService.getAllMedications().subscribe(
      (response: any) => {
        // Handle the response and assign it to your medication array
        this.medications = response;
      },
      (error: any) => {
        // Handle the error
        this.backendNotRunning = true;
      }
    );
  }


  

  sortData(sort: Sort) {
    const data = this.recalls.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.quantity, b.quantity, isAsc);
        case 'fat':
          return compare(a.expiration, b.expiration, isAsc);
        case 'carbs':
          return compare(a.supplier, b.supplier, isAsc);
        
        default:
          return 0;
      }
    });
  }

  


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}