import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule], // Hier hinzufügen!
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Standard-Sprache setzen
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}