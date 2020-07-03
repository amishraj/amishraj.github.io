import { Component, OnInit } from '@angular/core';
import { 
  Settings, 
  DefinedSensitivity
} from 'ngx-sticky-navbar';
import * as anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  blur:boolean=false;
  settings: Settings = {
    scroll: {
      element: '.scrollable'
    },
    sensitivity: {
      top: DefinedSensitivity.veryLow, // or 50
      bottom: DefinedSensitivity.veryHigh // or 10
    }
  };

  onmousemovedef(){
    var element = document.getElementById("mainbg");

    if(this.blur==true){
    element.setAttribute("style", "-webkit-filter: blur(4px);   filter: blur(4px);");
    }
    else{
      element.setAttribute("style", "-webkit-filter: blur(4px);   filter: blur(0px);");
    }

  }

  ngOnInit(){
    
  }
}
