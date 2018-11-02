import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrgStoreComponent } from './wrg-store.component';

describe('WrgStoreComponent', () => {
  let component: WrgStoreComponent;
  let fixture: ComponentFixture<WrgStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrgStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrgStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
