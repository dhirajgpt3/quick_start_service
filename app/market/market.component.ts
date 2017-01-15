import { Component, OnInit } from '@angular/core';
import {CollectableService} from "../shared/collectable.service";
import {Collectable} from "../shared/collectable.model";


@Component({
  selector: 'app-market',
  templateUrl: 'app/market/market.component.html'

})
export class MarketComponent implements OnInit {
  //collectables = [];
  private collectables: Collectable[]=[];
  onAddToCollection(){
    alert("hello");
  }

  constructor(private collectableService:CollectableService) { }

  ngOnInit() {
    this.collectables=this.collectableService.getCollectable();
  }

}
