import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVersionComponent } from './update-version.component';

describe('UpdateVersionComponent', () => {
  let component: UpdateVersionComponent;
  let fixture: ComponentFixture<UpdateVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
