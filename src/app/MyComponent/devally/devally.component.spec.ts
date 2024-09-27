import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevallyComponent } from './devally.component';

describe('DevallyComponent', () => {
  let component: DevallyComponent;
  let fixture: ComponentFixture<DevallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
