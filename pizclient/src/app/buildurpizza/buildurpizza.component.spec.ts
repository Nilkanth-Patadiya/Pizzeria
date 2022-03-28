import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildurpizzaComponent } from './buildurpizza.component';

describe('BuildurpizzaComponent', () => {
  let component: BuildurpizzaComponent;
  let fixture: ComponentFixture<BuildurpizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildurpizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildurpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
