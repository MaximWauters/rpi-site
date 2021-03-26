import { Component } from '@angular/core';
const gpio = require('../rpi-gpio').promise;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testSlider';

 points1 = 7;
 points2 = 7;
 t = 0;

  update(x: number){
    console.log(x);
    this.points1 = x;
    /*gpiop.setup(13, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(13, x)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })
    */
  }

  update2(x: number){
    this.points2 = x;
  }

  add(){
    this.t++;
    console.log(this.t);
  }
  


}
