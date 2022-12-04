import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompinicialComponent } from './compinicial.component';

describe('CompinicialComponent', () => {
  let component: CompinicialComponent;
  let fixture: ComponentFixture<CompinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompinicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
