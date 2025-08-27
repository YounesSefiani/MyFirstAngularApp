import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComposant } from './binding-composant';

describe('BindingComposant', () => {
  let component: BindingComposant;
  let fixture: ComponentFixture<BindingComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingComposant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingComposant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
