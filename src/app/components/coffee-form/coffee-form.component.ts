import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoffeeService} from '../../services/coffee.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.css']
})
export class CoffeeFormComponent implements OnInit {

  inputForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private getPlace: CoffeeService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submit');
  }


}
