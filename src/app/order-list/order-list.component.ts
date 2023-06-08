import { Component } from '@angular/core';


export interface PeriodicElement {
  supplier: string;
  position: number;
  weight: number;
  exp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, supplier: 'ABC Pharmaceuticals', weight: 1.0079, exp: '10-9-2022'},
  {position: 2, supplier: 'XYZ Health Solutions', weight: 4.0026, exp: '10-9-2022'},
  {position: 3, supplier: 'MedLink Pharmaceuticals', weight: 6.941, exp: '10-9-2022'},
  {position: 4, supplier: 'PharmaCare International', weight: 9.0122, exp: '10-9-2022'},
  {position: 5, supplier: 'Global Med Supplies', weight: 10.811, exp: '10-9-2022'},
  {position: 6, supplier: 'CareWell Pharmaceuticals', weight: 12.0107, exp: '10-9-2022'},
  {position: 7, supplier: 'HealthMax Pharmacy', weight: 14.0067, exp: '10-9-2022'},
  {position: 8, supplier: 'VitaPharm Solutions', weight: 15.9994, exp: '10-9-2022'},
  {position: 9, supplier: 'MediPrime Distributors', weight: 18.9984, exp: '10-9-2022'},
  {position: 10, supplier: 'LifeCare Medical Supplies', weight: 20.1797, exp: '10-9-2022'},
];


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

   displayedColumns: string[] = ['position', 'supplier', 'weight', 'exp'];
  dataSource = ELEMENT_DATA;

}
