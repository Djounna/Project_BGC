import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerSessionsComponent } from './organizer-sessions.component';

describe('OrganizerSessionsComponent', () => {
  let component: OrganizerSessionsComponent;
  let fixture: ComponentFixture<OrganizerSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
