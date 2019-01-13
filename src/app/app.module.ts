import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MealSelectorComponent } from './meal/meal-selector/meal-selector.component';
import { MealTypeService } from './meal/meal-selector/shared/meal-type.service';
import { MealFormComponent } from './meal/meal-form/meal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MealSelectorComponent,
    MealFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ MealTypeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
