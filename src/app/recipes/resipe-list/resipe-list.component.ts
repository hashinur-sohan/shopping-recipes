import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-resipe-list',
  templateUrl: './resipe-list.component.html',
  styleUrls: ['./resipe-list.component.css']
})
export class ResipeListComponent {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'A test recipe descripton',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',),
  new Recipe('A Test Recipe', 'A test recipe descripton',
    'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',)
];
}
