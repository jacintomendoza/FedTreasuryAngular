import { Component, OnInit } from '@angular/core';
import { Reserve } from './fed-treasury.model';
import { FedTreasuryService } from '../fed-treasury.service'; 

@Component({
  selector: 'app-fed-treasury',
  templateUrl: './fed-treasury.component.html',
  styleUrls: ['./fed-treasury.component.css']
})
export class FedTreasuryComponent implements OnInit {

  goldReserves: Reserve[] = [1]
  
  constructor() {private fedTreasuryService: FedTreasuryService}

  ngOnInit(): void {
    this.FedTreasuryService.getGoldReserve().subscribe(payload => {
      this.goldReserves = payload;
    })
  }

}

