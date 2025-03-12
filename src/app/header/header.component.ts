import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  currentLanguage: string = 'de'; // Standard-Sprache

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de'); // Standard-Sprache setzen
  }

  changeLanguage(lang: string) {
    this.translate.use(lang); // Sprache ändern
    this.currentLanguage = lang; // Aktuelle Sprache aktualisieren
  }

  ngOnInit() {
    // Setze die aktuelle Sprache auf die Standard-Sprache
    this.currentLanguage = this.translate.getDefaultLang();
  }
}