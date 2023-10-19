import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Locale } from 'src/models/locale.model';
import { ComponentTranslationService } from 'src/services/component-translation.service';
import { LocaleService } from 'src/services/locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // variables
  public appName: string = '';
  public appLocale: Locale;

  constructor(
    private readonly localeService: LocaleService,
    private readonly translationService: ComponentTranslationService
    ) {
    console.log(`prod ${environment.production}`);
    this.appName = environment.appName;
    this.appLocale = this.localeService.getAppCurrentLocale();

    this.translationService.test$.subscribe(r => {
      console.log('header, local has changed');
    });
    this.loadTranslations();
  }

  public updateCurrentLocale(locale: Locale): void {
    this.appLocale = this.localeService.setAppCurrentLocale(locale.country);
  }

  public getLocales(): Locale[] {
    return this.localeService.handledLocales;
  }

  /**
   * 
   */
    private loadTranslations(): void {
      this.translationService.load(
        this.localeService.getAppCurrentLocale().country,
        'header'
      ).subscribe(d => console.log(`current lang: ${this.translationService.getTranslate().currentLang}`));
    }
}
