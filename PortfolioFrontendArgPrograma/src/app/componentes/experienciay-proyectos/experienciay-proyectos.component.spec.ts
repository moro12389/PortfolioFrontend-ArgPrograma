import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciayProyectosComponent } from './experienciay-proyectos.component';

describe('ExperienciayProyectosComponent', () => {
  let component: ExperienciayProyectosComponent;
  let fixture: ComponentFixture<ExperienciayProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciayProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciayProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
