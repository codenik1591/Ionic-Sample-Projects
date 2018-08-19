import {Component, ViewChild, Renderer} from '@angular/core';
import {Platform} from 'ionic-angular';

/**
 * Generated class for the CanvasDrawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'canvas-draw',
  templateUrl: 'canvas-draw.html'
})
export class CanvasDrawComponent {

  /*text: string;
*/

  @ViewChild('myCanvas') canvas: any;
  canvasElement: any;
  lastX: number;
  lastY: number;


  constructor(public platform: Platform, public renderer: Renderer) {
    console.log('Hello CanvasDrawComponent Component');
    /*this.text = 'Hello World';*/
  }

  ngAfterViewInit() {
    //console.log(this.canvas);
    this.canvasElement = this.canvas.nativeElement;
    console.log("Width: " + this.platform.width());

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

    window.addEventListener('deviceorientation', (event) => {

      console.log("DeviceOrientation!!");

      var x = event.alpha;
      var y = event.beta;
      var z = event.gamma;

      var fact = (x + y + z) / 3;

      var r = this.getRandomInt(255);
      var g = this.getRandomInt(255);
      var b = this.getRandomInt(255);

      var color1 = "rgb(" + r + "," + g + "," + b + ")";

      /* r = getRandomInt1(150, 220);
       g = getRandomInt1(150, 220);
       b = getRandomInt1(150, 2250

  100         var color2 = "rgb(" + r + "," + g + "," + b + ")";*/

      r = this.getRandomInt1(50, 100);
      g = this.getRandomInt1(50, 100);
      b = this.getRandomInt1(50, 100);

      var color3 = "rgb(" + r + "," + g + "," + b + ")";


      if (fact < 5 && fact > 0) {
        //alert("In If statement!!");
        //vibrateMe();
        //setTimeout(1000);
      }
      else {
        this.drawCircle(color1, color3, fact);
      }


    });

  }


  getRandomInt(val) {
    return Math.floor(Math.random() * (val + 1));
  }

  getRandomInt1(val1, val2) {
    return (val1 + Math.floor(Math.random() * ((val2 - val1) + 1)));
  }


  drawCircle(col1, col3, fact) {

    //var cc = document.getElementById("myCanvas");
    var c = this.canvasElement.getContext("2d");

    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');

    var width = this.platform.width();//cc.width;
    var height = this.platform.height();//cc.height;

    //console.log(width + " : "+height);

    c.beginPath();
    c.fillStyle = col3; //"red";
    c.fillRect(0, 0, width, height);
    c.fill();
    c.closePath();


    //left side

    var radius = 0;
    var x = 0;
    var y = 0;

    if (width > height) {
      radius = (width / 2) - (fact * 1.5);
      x = 0;
      y = height / 2;
    }
    else {
      radius = (height - (width / 2)) - (fact * 1.2);
      x = 0 - (height - width);
      y = height / 2;
    }

    console.log("OG X: " + x + " Y: " + y)

    var count = 0;

    for (var i = 500; i > 0 && radius > 0; i--) {
      if (i % 2 == 0) {
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.lineWidth = '2';
        c.strokeStyle = col1; //"white";
        c.fillStyle = col1; // "white";

        c.fill();
        c.stroke();
        c.closePath();

        radius -= 8;
        x += 8;
        //count++;

      } else {
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.lineWidth = '2';
        c.strokeStyle = "black";
        c.fillStyle = "black";

        c.stroke();
        c.fill();
        c.closePath();

        radius -= 8;
        x += 8;

        //count ++;
      }
    }

    //console.log("X: "+x+" Y: "+y+" Radius: "+radius);

    if (width > height) {
      radius = (width / 2) - (fact * 1.5);
      x = width;
      y = height / 2;
    }
    else {
      radius = (height - (width / 2)) - (fact * 1.2);
      x = width + (height - width);
      y = height / 2;
    }


    //right side

    console.log("Right  -  X: " + x + " Y: " + y + " Radius: " + radius + " Count: " + count);

    for (let i = 500; i > 0 && radius > 0; i--) {
      if (i % 2 == 0) {
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.lineWidth = '2';
        c.strokeStyle = col1; //"white";
        c.fillStyle = col1; // "white";

        c.fill();
        c.stroke();
        c.closePath();

        radius -= 8;
        x -= 8;

      } else {
        c.beginPath();
        c.arc(x, y, radius, 0, 2 * Math.PI);
        c.lineWidth = '2';
        c.strokeStyle = "black";
        c.fillStyle = "black";

        c.stroke();
        c.fill();
        c.closePath();

        radius -= 8;
        x -= 8;

      }
    }


    console.log("For line -  Width: " + width + " Height: " + height);


    c.beginPath();
    c.lineWidth = 10;
    c.strokeStyle = col1;
    c.strokeRect(0, 0, width, height);
    c.stroke();
    c.closePath();

  }


}
