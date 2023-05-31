import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogElementComponent } from './dialog-element.component';

describe('DialogElementComponent', () => {
  let component: DialogElementComponent;
  let fixture: ComponentFixture<DialogElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
