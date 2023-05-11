import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { convertCamelCaseToSentence } from '../utilities/tableUtility';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit{

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  convertCamelCaseToSentence: (key: string)  => string = convertCamelCaseToSentence;

  ngOnInit(): void {
    const dataFromApi = { columns: ["name", "mobile", "companyName", "companyWebsite", "email"], data: [{name: "Karan", mobile: "9599909167", companyName: "Google", companyWebsite: "google.com", email: "karankanojia2708@gmail.com"}]};
    this.displayedColumns =  dataFromApi?.columns;
    this.dataSource = new MatTableDataSource<any>(dataFromApi.data);

  }
}
