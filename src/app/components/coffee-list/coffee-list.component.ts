import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {
  coffeeShops;
  cool;
  helloWorld = 'hello';
  venues;

  constructor(private getPlace: CoffeeService) { }

  ngOnInit() {
    this.getPlace.fetchCoffeePlaces().subscribe(data => {
      // console.log('data', data);
      console.log('data', data.response.groups[0].items);
      console.log('');

      this.helloWorld = 'hi';
      this.venues = data.response.groups[0].items;
      console.log('');
      this.coffeeShops = data;
    });
  }
}
