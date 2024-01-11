import { Component, Inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandwhichOrder } from '../../../assets/interfaces';

@Component({
  selector: 'app-sandwhich-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sandwhich-display.component.html',
  styleUrl: './sandwhich-display.component.css'
})


export class SandwhichDisplayComponent {

  @Input() order: SandwhichOrder = {};

}
