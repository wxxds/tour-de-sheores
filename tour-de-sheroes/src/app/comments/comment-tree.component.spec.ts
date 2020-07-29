import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTree } from './comment-tree.component';

describe('CommentTree', () => {
  let component: CommentTree;
  let fixture: ComponentFixture<CommentTree>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTree ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
