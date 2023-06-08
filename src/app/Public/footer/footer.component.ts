import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('footerAnimation', [
      state('void', style({ opacity: 0})),
      transition('void <=> *', animate(500)),
    ])
  ]
})
export class FooterComponent implements OnInit {
  state: string = 'default';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onIconClick(icon: string): void {
    console.log('Clicked on ${icon}');
    //add some logic
  }

}
