import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('bitmoji') bitmoji!: ElementRef;
  code="</Code >";
  
  onMouseMove(event: MouseEvent) {
    const bitmojiElement = this.bitmoji.nativeElement;
    const rect = bitmojiElement.getBoundingClientRect();
    const xAxis = (rect.width / 2 - (event.clientX - rect.left)) / 15;  // Adjust sensitivity
    const yAxis = (rect.height / 2 - (event.clientY - rect.top)) / 15;  // Adjust sensitivity

    // Apply the 3D transform based on mouse position
    bitmojiElement.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  onMouseLeave() {
    const bitmojiElement = this.bitmoji.nativeElement;
    // Reset the transformation when the mouse leaves
    bitmojiElement.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }
}
