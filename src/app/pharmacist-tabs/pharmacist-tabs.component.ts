import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacist-tabs',
  templateUrl: './pharmacist-tabs.component.html',
  styleUrls: ['./pharmacist-tabs.component.css']
})
export class PharmacistTabsComponent {
  alertSettings: String[] = ["Set Alerts to ASAP", "Set Alerts to 'once per day'", "set alerts to twice per day", "Turn Alerts OFF"];

}
