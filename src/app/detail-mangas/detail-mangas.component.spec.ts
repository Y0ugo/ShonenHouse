import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMangasComponent } from './detail-mangas.component';

describe('DetailMangasComponent', () => {
  let component: DetailMangasComponent;
  let fixture: ComponentFixture<DetailMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMangasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
