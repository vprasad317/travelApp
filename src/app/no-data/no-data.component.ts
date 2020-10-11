import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateToSearch(): void {
    this.router.navigate(['search-control']);
  }
}
