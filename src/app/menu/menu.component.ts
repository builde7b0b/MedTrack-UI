import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

}
