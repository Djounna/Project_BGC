import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSessionsComponent } from './member-sessions.component';

describe('MemberSessionsComponent', () => {
  let component: MemberSessionsComponent;
  let fixture: ComponentFixture<MemberSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSessionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
