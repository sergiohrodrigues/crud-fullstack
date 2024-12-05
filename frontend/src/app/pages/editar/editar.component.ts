import { Component, OnInit } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{

  item!: Item;

  btnForm = 'Salvar'
  descTitulo = 'Editar item'

  constructor(private serviceItem:ItemService, private router: Router ,private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serviceItem.GetItemId(id).subscribe(response => {
      this.item = response.dados;
    })
  }

  editarItem(item: Item){
    this.serviceItem.EditarItem(item).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
