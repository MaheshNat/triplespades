import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() id: string;
  @Output() edit: EventEmitter<void> = new EventEmitter<void>();
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  editRecipe() {
    this.edit.emit();
  }

  deleteRecipe() {
    this.delete.emit();
  }
}
