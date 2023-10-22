import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Locale } from 'src/models/locale.model';
import { LocaleService } from 'src/services/locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // variables
  public appName: string = '';
  public appTheme: string = 'white';
  public themeList: string[] = ['white', 'dark'];
  public appLocale: Locale;

  constructor(
    private readonly localeService: LocaleService,
    private readonly router: Router
    ) {
    console.log(`prod ${environment.production}`);
    this.appName = environment.appName;
    this.appLocale = this.localeService.getAppCurrentLocale();

    let currentTheme: string | null = localStorage.getItem('theme');
    if (currentTheme == null || !this.themeList.some(r => r === currentTheme)) {
      this.appTheme = this.themeList[0];
      localStorage.setItem('theme', this.appTheme);
    }
    this.appTheme = localStorage.getItem('theme') ?? this.themeList[0];
    this.setTheme();
  }

  public updateCurrentLocale(locale: Locale): void {
    this.appLocale = this.localeService.setAppCurrentLocale(locale.country);
  }

  public getLocales(): Locale[] {
    return this.localeService.handledLocales;
  }

  public getTheme(): string {
    return this.appTheme === 'white' ? 'brightness_2' : 'wb_sunny';
  }

  public getThemeColor(): string {
    return this.appTheme === 'white' ? 'dark-theme' : 'white-theme';
  }

  public updateTheme(): void {
    this.appTheme = this.themeList[(this.themeList.findIndex(t => t === this.appTheme) + 1) % 2];
    localStorage.setItem('theme', this.appTheme);
    this.setTheme();
  }

  private setTheme(): void {
    document.body.className = this.appTheme === 'white' ? 'white-theme' : 'black-theme';
  }

  public isActive(slug: string): boolean {
    return this.router.url.endsWith(slug);
  }
}
