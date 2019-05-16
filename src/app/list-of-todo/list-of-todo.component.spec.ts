import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTodoComponent } from './list-of-todo.component';

describe('ListOfTodoComponent', () => {
  let component: ListOfTodoComponent;
  let fixture: ComponentFixture<ListOfTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
