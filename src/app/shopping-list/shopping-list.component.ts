import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] =[
    new Ingredient('Apple', 80),
    new Ingredient('Tomato', 33),
    new Ingredient('potato', 20),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
