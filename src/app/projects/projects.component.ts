import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  navigateTo(project: string) {
    const url = `https://github.com/amishraj/${project}`;
    window.open(url, '_blank');
  }

}
