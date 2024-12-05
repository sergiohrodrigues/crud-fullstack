import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  items: Item[] = [];
  itemsGeral: Item[] = [];

  constructor(private serviceItem:ItemService){}


  ngOnInit(): void {

    this.serviceItem.GetAllItems().subscribe(response => {
        this.items = response.dados;
        this.itemsGeral = response.dados;
    })

  }


  search(event:Event){

    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.items = this.itemsGeral.filter(item =>{
      return item.name.toLowerCase().includes(value);
    })
  }

  deletar(id:number | undefined){
    this.serviceItem.DeletarItem(id).subscribe(response => {
      window.location.reload()
    })
  }

}
