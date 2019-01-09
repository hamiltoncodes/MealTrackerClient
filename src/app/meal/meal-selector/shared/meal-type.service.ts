import { MealType } from './mealtype';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MealTypeService {
  private mealTypeUrl = 'http://localhost:51530/api';

  constructor(
    private httpClient: HttpClient) { }

    getAllMealTypes(): Observable<MealType[]> {
      return this.httpClient.get<MealType[]>(this.mealTypeUrl + '/MealTypes');
    }

    // getMealType(id: number): Observable<MealType[]> {
    //   return this.httpClient.get<MealType[]>(this.mealTypeUrl + '/MealTypes/' + id);
    // }
}
