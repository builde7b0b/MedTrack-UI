import { Component, OnInit } from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../roles/RoleService';
import { MedicationService } from '../medication.service';
import { Medication } from '../medication.service';

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})

export class InventoryManagementComponent {

  userRole: string = '';

  typesOfShoes: String[] = ["Aspirin", "Tylenol", "albuterol", "RandomRx"];

  alertSettings: String[] = ["Set Alerts to ASAP", "Set Alerts to 'once per day'", "set alerts to twice per day", "Turn Alerts OFF"];

  // sortedData: any[] = [];
  
  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];
  sortedData: Dessert[];

  
createMedication() {
  const newMedication: Medication = {
    medicationId: null, // Set it to null temporarily
    name: "aspirin",
    quantity: 10,
    expirationDate: new Date("2023-06-01") // Set the desired expiration date
  };
  
  
  
  this.medicationService.createMedication(newMedication).subscribe( response => {
    // handle response,
    console.log('Medication created successfully:', response);
  },
  error => {
    console.error('Error creating medication:', error);
  })
}


  constructor(private roleService: RoleService, private medicationService: MedicationService) {
    this.userRole = 'Technician';
    
    // Populating the data
    this.sortedData = [
      { name: 'Chocolate Cake', calories: 300, fat: 12, carbs: 40, protein: 4 },
      { name: 'Strawberry Cheesecake', calories: 250, fat: 10, carbs: 35, protein: 3 },
      { name: 'Vanilla Ice Cream', calories: 200, fat: 8, carbs: 30, protein: 2 },
      // Add more dessert objects as needed
    ];
  }

  ngOnInit() {
    this.roleService.role$.subscribe(role => {
      this.userRole = role;
      // Perform any necessary actions based on the userRole
    });
  }

  

  sortData(sort: Sort) {
    const data = this.desserts.slice();
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
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }

  


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}