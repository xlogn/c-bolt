import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { convertCamelCaseToSentence } from '../utilities/tableUtility';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  displayedColumns: string[] = []; // Define the column names
  dataSource = new MatTableDataSource<any>([]); // Replace YOUR_DATA_ARRAY with your actual data array



  ngOnInit(): void {

  }

}
