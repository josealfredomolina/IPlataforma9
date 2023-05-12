import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMovieComponent } from './component-movie.component';

describe('ComponentMovieComponent', () => {
  let component: ComponentMovieComponent;
  let fixture: ComponentFixture<ComponentMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
