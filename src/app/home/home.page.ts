import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  user = {
    name: 'Owais',
    city: 'Rwalpindi',
    interests: ['Teaching' , 'leadership' , 'Development']
  };
}
