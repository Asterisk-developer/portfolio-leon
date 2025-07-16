import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHome } from './base-home';

describe('BaseHome', () => {
  let component: BaseHome;
  let fixture: ComponentFixture<BaseHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
