import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVersionComponent } from './add-version.component';

describe('AddVersionComponent', () => {
  let component: AddVersionComponent;
  let fixture: ComponentFixture<AddVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
