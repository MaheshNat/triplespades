import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipes: any;
  isLoading: boolean;
  editing: boolean;
  editingRecipe: Recipe;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.isLoading = true;
    this.recipes = this.http.get<Recipe[]>('http://127.0.0.1:5000/recipes');
    this.recipes.subscribe((resData) => {
      console.log(resData);
      this.isLoading = false;
    });
  }

  onSubmitForm(insertForm: NgForm) {
    this.http
      .post<{ message: string }>('http://127.0.0.1:5000/recipes', {
        name: insertForm.value.name,
        description: insertForm.value.description,
      })
      .subscribe((response) => {
        console.log(response);
        this.loadRecipes();
      });
  }

  onEdit(editForm: NgForm) {
    this.http
      .put<{ message: string }>(
        `http://127.0.0.1:5000/recipes/${this.editingRecipe._id.$oid}`,
        {
          name: editForm.value.name,
          description: editForm.value.description,
        }
      )
      .subscribe((response) => {
        console.log(response);
        this.loadRecipes();
      });
  }

  deleteRecipe(id: string) {
    this.http
      .delete<{ message: string }>(`http://127.0.0.1:5000/recipes/${id}`)
      .subscribe((response) => {
        console.log(response);
        this.loadRecipes();
      });
  }

  onEditRecipe(recipe: Recipe) {
    this.editing = true;
    this.editingRecipe = recipe;
  }
}
