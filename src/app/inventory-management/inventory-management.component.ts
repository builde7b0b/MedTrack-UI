import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent {
  typesOfShoes: String[] = ["Aspirin", "Tylenol", "albuterol", "RandomRx"];

  alertSettings: String[] = ["Set Alerts to ASAP", "Set Alerts to 'once per day'", "set alerts to twice per day", "Turn Alerts OFF"];


}
