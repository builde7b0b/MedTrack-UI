import { Component } from '@angular/core';
import { Medication } from '../../medication.service';

@Component({
  selector: 'app-manager-tabs',
  templateUrl: './manager-tabs.component.html',
  styleUrls: ['./manager-tabs.component.css']
})
export class ManagerTabsComponent {


  backendNotRunning = false;

  medications: Medication[] = []; // init the medications array


}
