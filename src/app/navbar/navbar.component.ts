import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkTheme = false;
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
  }

  toggleSwitch() {
    // Trigger the checkbox click event programmatically
    const themeSwitch = document.getElementById('themeSwitch') as HTMLInputElement;
    themeSwitch.click();
  }
}
