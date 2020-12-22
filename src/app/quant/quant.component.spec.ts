import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantComponent } from './quant.component';

describe('QuantComponent', () => {
  let component: QuantComponent;
  let fixture: ComponentFixture<QuantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
