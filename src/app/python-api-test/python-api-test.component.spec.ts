import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonApiTestComponent } from './python-api-test.component';

describe('PythonApiTestComponent', () => {
  let component: PythonApiTestComponent;
  let fixture: ComponentFixture<PythonApiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonApiTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonApiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
