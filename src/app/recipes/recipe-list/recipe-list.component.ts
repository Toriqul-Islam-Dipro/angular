import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test recipe','This is the description of the test Recipes','./assets/images/recipe1.jpg'),
    new Recipe('A Test recipe','This is the description of the test Recipes','./assets/images/recipe1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
