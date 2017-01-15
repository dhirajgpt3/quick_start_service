import {Collectable} from "./collectable.model";
export  class CollectableService
{
  private collectables: Collectable[] = [
    {description:'A very rare copy of "Jquery for dummies"', type:'Book'},
    {description:'A first letter ever written', type:'Piece of paper'},
    {description:'A photograph showing nothing', type:'Photo'},
    {description:'A box with all sold zunes', type:'Garbage'},
  ];

 getCollectable(){
    return this.collectables;
  }


}
