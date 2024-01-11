import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SandwhichDisplayComponent } from './sandwhich-display/sandwhich-display.component';
import { sandwichOrder } from '../../assets/interfaces';

@Component({
  selector: 'sandwich-maker',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SandwhichDisplayComponent],
  templateUrl: './sandwich-maker.component.html',
  styleUrl: './sandwich-maker.component.css'
})

export class SandwichMakerComponent {

  data2 = {
    breads: ['White', 'Wheat', 'Rye'],
    meats: ['Chicken', 'Roast Beef', "Turkey", "Pastrami"],
    vegetables: ['Tomato', 'Lettuce', 'Banana Peppers', 'Onion'],
    cheeses: ['Cheddar', 'Pepper Jack', 'American', 'Provolone'],
    condiments: ['Mayonnaise', 'Olive Oil', 'Vinegar', 'Pepper', 'Salt', 'Oregano']
  }

  @Output() orderMade: sandwichOrder = { 
    name : '',
    breads: '',
    meats: [],
    cheeses: [],
    vegetables: [],
    condiments: []

};
  orderForm: FormGroup;
  orderSubmitted: boolean = false;

  // create form with formbuilder and designate form arrays and controlls.
  // FormArrays will handle multiple selections with check boxes
  constructor(private form: FormBuilder) {
    this.orderForm = this.form.group({
      name: new FormControl(null, Validators.required),
      breads: new FormControl(null, Validators.required),
      meats: new FormArray([]),
      vegetables: new FormArray([]),
      cheeses: new FormArray([]),
      condiments: new FormArray([])
    })

  }

  protected handleSelections(e: any) {

    let selectedArray = this.orderForm.get(e.target.name) as FormArray;

    if (e.target.checked) {

      selectedArray.push(new FormControl(e.target.value));
    }

    else {
      let index = 0;
      selectedArray.controls.forEach((option: any) => {
        if (option.value == e.target.value) {
          selectedArray.removeAt(index)
          return
        }
        index++
      })

    }

  }


  protected createOrder() {
    let sandwichOrder: sandwichOrder = {
      name: '',
      breads: '',
      meats: [],
      vegetables: [],
      cheeses: [],
      condiments: [],
    }

    sandwichOrder.name = this.orderForm.get('name')?.value;
    sandwichOrder.breads = this.orderForm.get('breads')?.value;
    sandwichOrder.meats = this.orderForm.get('meats')?.value;
    sandwichOrder.vegetables = this.orderForm.get('vegetables')?.value;
    sandwichOrder.cheeses = this.orderForm.get('cheeses')?.value;
    sandwichOrder.condiments = this.orderForm.get('condiments')?.value;

    this.orderMade = sandwichOrder;

    this.orderSubmitted = true;

  }

  protected clearOrder(){
    this.orderSubmitted = false; 
  }

}
