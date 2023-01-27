import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNavBarComponent } from './edit-nav-bar.component';

describe('EditNavBarComponent', () => {
  let component: EditNavBarComponent;
  let fixture: ComponentFixture<EditNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
