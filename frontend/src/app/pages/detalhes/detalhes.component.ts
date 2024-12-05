import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{

  constructor( private serviceItem:ItemService,private route : ActivatedRoute) { }

  item!: Item

  ngOnInit(): void {
    this.serviceItem.GetItemId(Number(this.route.snapshot.paramMap.get('id'))).subscribe(response => {
      this.item = response.dados;
    })
  }
}
