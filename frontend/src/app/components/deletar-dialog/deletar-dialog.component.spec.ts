import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarDialogComponent } from './deletar-dialog.component';

describe('DeletarDialogComponent', () => {
  let component: DeletarDialogComponent;
  let fixture: ComponentFixture<DeletarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
