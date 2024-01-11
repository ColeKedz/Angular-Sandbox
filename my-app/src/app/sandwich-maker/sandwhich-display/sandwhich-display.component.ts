import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface sanwhichOrder {
  name: string,
  breads: string,
  meats?: String[],
  vegetables?: string[],
  cheeses?: string[],
  condiments?: string[]
}

@Component({
  selector: 'app-sandwhich-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sandwhich-display.component.html',
  styleUrl: './sandwhich-display.component.css'
})


export class SandwhichDisplayComponent implements OnInit {
ngOnInit(): void {
  console.log(this.order)
}

@Input() order: any;  




}
