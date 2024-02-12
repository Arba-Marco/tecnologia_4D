import { ComponentFixture, TestBed } from '@angular/core/testing';

import { foocomponent } from './foo.component';

describe('FooComponent', () => {
  let component: foocomponent;
  let fixture: ComponentFixture<foocomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [foocomponent]
    });
    fixture = TestBed.createComponent(foocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
