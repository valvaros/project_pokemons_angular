import { Component, OnInit } from '@angular/core';
import { POKEMONS} from '../bdd/pokedex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void { //qu'en la page sera afficher execute ce qui est entre les accolade 

  }

}
