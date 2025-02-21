import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemSiteHomeComponent } from './stem-site-home.component';

describe('StemSiteHomeComponent', () => {
  let component: StemSiteHomeComponent;
  let fixture: ComponentFixture<StemSiteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StemSiteHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StemSiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
