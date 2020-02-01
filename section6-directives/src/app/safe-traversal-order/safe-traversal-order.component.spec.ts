import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalOrderComponent } from './safe-traversal-order.component';

describe('SafeTraversalOrderComponent', () => {
  let component: SafeTraversalOrderComponent;
  let fixture: ComponentFixture<SafeTraversalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTraversalOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTraversalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
