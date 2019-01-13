import { Component } from '@angular/core';
import { MealTypeService } from '../meal-selector/shared/meal-type.service';
import { MealType } from '../meal-selector/shared/mealtype';

@Component({
  selector: 'app-meal-selector',
  templateUrl: './meal-selector.component.html',
  styleUrls: ['./meal-selector.component.css']
})
export class MealSelectorComponent {
  title = 'Meal Tracker';
  mealTypes: MealType[];
  mealType: MealType;
  constructor(private mealTypeService: MealTypeService) {
    this.mealTypeService.getAllMealTypes().subscribe((mealType) => {
      this.mealTypes = mealType;
    });
  }

  // getAllMealTypes() {
  //   this.mealTypeService.getAllMealTypes().subscribe((mealType) => {
  //     this.mealTypes = mealType;
  //   });
  // }

  // getMealType(id: number) {
  //   this.mealTypeService.getMealType(id).subscribe((mealType) => {
  //     this.mealType = mealType[0];
  //   });
  // }
}
