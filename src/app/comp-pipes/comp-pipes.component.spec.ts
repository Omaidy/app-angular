import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPipesComponent } from './comp-pipes.component';

describe('CompPipesComponent', () => {
  let component: CompPipesComponent;
  let fixture: ComponentFixture<CompPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
