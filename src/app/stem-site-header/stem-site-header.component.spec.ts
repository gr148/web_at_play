import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemSiteHeaderComponent } from './stem-site-header.component';

describe('StemSiteHeaderComponent', () => {
  let component: StemSiteHeaderComponent;
  let fixture: ComponentFixture<StemSiteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StemSiteHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StemSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
