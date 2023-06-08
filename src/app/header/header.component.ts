import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isBurgerMenuActive = '';


  controlMenu(){
    if (this.isBurgerMenuActive === 'is-active') {
      console.log("Yes active");
      this.isBurgerMenuActive = '';
    } else {
      this.isBurgerMenuActive = 'is-active'
    }
  }
}
