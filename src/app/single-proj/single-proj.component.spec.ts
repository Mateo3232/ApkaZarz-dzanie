import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjComponent } from './single-proj.component';

describe('SingleProjComponent', () => {
  let component: SingleProjComponent;
  let fixture: ComponentFixture<SingleProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
