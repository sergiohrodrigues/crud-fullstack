import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{

  usuarioForm!:FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(this.item ? this.item.id : 0),
      name: new FormControl(this.item ? this.item.name : ''),
      description: new FormControl(this.item ? this.item.description : ''),
    });
  }

  @Input() item!: Item
  @Input() btnForm!: string
  @Input() descTitulo!: string
  @Output() onSubmit = new EventEmitter<Item>()

  submit(){
    this.onSubmit.emit(this.usuarioForm.value);
  }

}
