import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('highlightedPart') highlightedPart!: ElementRef;
  @ViewChild('normalPart') normalPart!: ElementRef;
  @ViewChild('mainHeader') mainHeader!: ElementRef;  // Ref to the main header with Bitmoji

  skills='Staying Keen In Lifelong Learning and Success';
  isFullFormSkills=true;

  ngAfterViewInit() {
    const options = {
      root: null,  // Viewport
      threshold: 0  // Trigger when the main-header leaves the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // Reset when the main-header is in the viewport
          this.highlightedPart.nativeElement.classList.remove('highlight');
          this.normalPart.nativeElement.classList.remove('normal');
        } else {
          // When the main-header is fully out of the viewport
          this.highlightedPart.nativeElement.classList.add('highlight');
          this.normalPart.nativeElement.classList.add('normal');
        }
      });
    }, options);

    observer.observe(this.mainHeader.nativeElement);
  }

  toggleSkills(){
    if(this.isFullFormSkills){
      this.skills= 'S.k.i.l.l.s';
      this.isFullFormSkills=false;
    } else{
      this.skills='Staying Keen In Lifelong Learning and Success';
      this.isFullFormSkills=true;
    }
  }
}
