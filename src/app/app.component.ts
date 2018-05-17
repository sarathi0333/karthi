import { Component } from '@angular/core';
import { NetworkService } from './services/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [];
  constructor(private networkservice: NetworkService) { }

  click() {
    console.log("click functio called");
    this.networkservice.getData().subscribe(data => {
      console.log(data);
      this.array = data.modelStructureDTOList;
      console.log(this.array);
    })
  }
}
