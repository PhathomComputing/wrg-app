import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgGridItemComponent } from './wrg-grid-item.component';

describe('WrgGridItemComponent', () => {
  let component: WrgGridItemComponent;
  let fixture: ComponentFixture<WrgGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
