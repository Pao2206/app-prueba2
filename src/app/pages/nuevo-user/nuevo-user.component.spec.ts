import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoUserComponent } from './nuevo-user.component';

describe('NuevoUserComponent', () => {
  let component: NuevoUserComponent;
  let fixture: ComponentFixture<NuevoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
