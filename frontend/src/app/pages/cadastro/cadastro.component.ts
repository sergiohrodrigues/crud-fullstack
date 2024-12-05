import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  btnForm = 'Cadastrar'
  descTitulo = 'Cadastrar item'

  constructor(private serviceItem:ItemService, private router: Router){}

  criarItem(item: Item){
    this.serviceItem.CriarItem(item).subscribe(response => {
      this.router.navigate(['/']);
    })
  }
}
