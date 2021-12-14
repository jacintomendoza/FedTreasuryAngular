import { Component, OnInit } from '@angular/core';
import { Reserve } from './fed-treasury.model';
import { FedTreasuryService } from '../fed-treasury.service'; 

@Component({
  selector: 'app-fed-treasury',
  templateUrl: './fed-treasury.component.html',
  styleUrls: ['./fed-treasury.component.css']
})
export class FedTreasuryComponent implements OnInit {

  goldReserves: Reserve[] = [];
  
  constructor(private fedTreasuryService: FedTreasuryService) {}

  ngOnInit(): void {
    this.fedTreasuryService.getGoldReserve().subscribe(payload => {
      // console.log("reserves are", payload.data)
      this.goldReserves = payload.data;
    })
  }

}