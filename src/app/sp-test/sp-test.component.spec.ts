import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpTestComponent } from './sp-test.component';

describe('SpTestComponent', () => {
  let component: SpTestComponent;
  let fixture: ComponentFixture<SpTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
