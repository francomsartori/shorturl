import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcortarUrlComponent } from './acortar-url.component';

describe('AcortarUrlComponent', () => {
  let component: AcortarUrlComponent;
  let fixture: ComponentFixture<AcortarUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcortarUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcortarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
