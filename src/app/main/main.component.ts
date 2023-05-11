import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.router.navigate([this.TABS[this.selectedTab].route]);
  }


  TABS = [
    { label: 'Users', index : 0, route: '/users'},
    { label: 'Devices', index: 1, route: '/devices'},
    { label: 'Certificates', index: 2, route: '/certificates'},
    { label: 'Downloads', index : 3, route: '/downloads'},
    { label: 'Profile', index: 4, route: '/profile'},
    { label: 'Logout', index: 5, route: '/users'},
  ];

  selectedTab = 0;


  onTabSelectionChange(event: MatTabChangeEvent): void {
    const selectedTabIndex = event.index;
    this.router.navigate([this.TABS[selectedTabIndex].route]);
  }
}
