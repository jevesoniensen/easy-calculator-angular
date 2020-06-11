import { Component, OnInit } from '@angular/core';
import { AccountEntriesService, AccountEntry } from '../services/account-entries/account-entries.service';
import { Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-table-account-entries',
  templateUrl: './table-account-entries.component.html',
  styleUrls: ['./table-account-entries.component.css']
})
export class TableAccountEntriesComponent implements OnInit {

  accountEntriesDataSource: AccountEntriesDataSource;
  tableColumns: String[];

  constructor( private accountEntriesService: AccountEntriesService ) { 
  }

  ngOnInit(): void {
    this.accountEntriesDataSource = new AccountEntriesDataSource(this.accountEntriesService);
    this.tableColumns = this.accountEntriesService.getColumns();
  }
}

export class AccountEntriesDataSource extends DataSource<AccountEntry> {

  constructor(private accountEntriesService: AccountEntriesService) {
    super();
  }

  connect(): Observable<AccountEntry[]> {
    return this.accountEntriesService.getAccountEntries();
  }

  disconnect() { }
}
