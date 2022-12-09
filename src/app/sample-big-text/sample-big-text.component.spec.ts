import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBigTextComponent } from './sample-big-text.component';

describe('SampleBigTextComponent', () => {
  let component: SampleBigTextComponent;
  let fixture: ComponentFixture<SampleBigTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleBigTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleBigTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
