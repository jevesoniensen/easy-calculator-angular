import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAccountEntriesComponent } from './table-account-entries.component';

describe('TableAccountEntriesComponent', () => {
  let component: TableAccountEntriesComponent;
  let fixture: ComponentFixture<TableAccountEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAccountEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAccountEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
