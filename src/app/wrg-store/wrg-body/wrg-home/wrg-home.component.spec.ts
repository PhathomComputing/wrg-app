import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgHomeComponent } from './wrg-home.component';

describe('WrgHomeComponent', () => {
  let component: WrgHomeComponent;
  let fixture: ComponentFixture<WrgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
