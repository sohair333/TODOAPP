import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeTaskComponent } from './edite-task.component';

describe('EditeTaskComponent', () => {
  let component: EditeTaskComponent;
  let fixture: ComponentFixture<EditeTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
