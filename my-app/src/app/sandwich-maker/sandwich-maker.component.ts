import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'sandwich-maker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sandwich-maker.component.html',
  styleUrl: './sandwich-maker.component.css'
})
export class SandwichMakerComponent {

  breads: string[] = ['White', 'Wheat', 'Rye'];
  meats: string[] = ['Chicken', 'Beef', 'none'];
  vegetables: string[] = ['Tomatoe', 'Lettuce', 'Banana Peppers', 'Onion'];
  cheeses: string[] = ['Cheddar', 'Pepper Jack', 'American', 'Provolone'];

}
