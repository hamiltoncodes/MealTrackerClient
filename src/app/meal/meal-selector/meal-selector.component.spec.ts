import { TestBed, async } from '@angular/core/testing';
import { MealSelectorComponent } from './meal-selector.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MealSelectorComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MealSelectorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'MealTrackerClient'`, async(() => {
    const fixture = TestBed.createComponent(MealSelectorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MealTrackerClient');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MealSelectorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to MealTrackerClient!');
  }));
});
