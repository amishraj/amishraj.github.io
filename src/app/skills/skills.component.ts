import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills='Staying Keen In Lifelong Learning and Success';
  isFullFormSkills=true;

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
