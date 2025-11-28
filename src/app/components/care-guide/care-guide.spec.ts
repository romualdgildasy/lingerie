import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareGuide } from './care-guide';

describe('CareGuide', () => {
  let component: CareGuide;
  let fixture: ComponentFixture<CareGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
