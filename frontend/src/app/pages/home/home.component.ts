import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatTooltipModule, MatIconModule],
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

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
