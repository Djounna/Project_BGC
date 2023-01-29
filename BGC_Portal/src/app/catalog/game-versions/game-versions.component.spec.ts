import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameVersionsComponent } from './game-versions.component';

describe('GameVersionsComponent', () => {
  let component: GameVersionsComponent;
  let fixture: ComponentFixture<GameVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameVersionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
