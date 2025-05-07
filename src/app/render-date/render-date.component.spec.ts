import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderDateComponent } from './render-date.component';

describe('RenderDateComponent', () => {
  let component: RenderDateComponent;
  let fixture: ComponentFixture<RenderDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
