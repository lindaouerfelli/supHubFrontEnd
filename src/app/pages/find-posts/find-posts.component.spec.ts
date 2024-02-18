import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPostsComponent } from './find-posts.component';

describe('FindPostsComponent', () => {
  let component: FindPostsComponent;
  let fixture: ComponentFixture<FindPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
