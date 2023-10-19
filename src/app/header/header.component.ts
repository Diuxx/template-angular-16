import { Component } from '@angular/core';
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
  public appLocale: Locale;

  constructor(
    private readonly localeService: LocaleService
    ) {
    console.log(`prod ${environment.production}`);
    this.appName = environment.appName;
    this.appLocale = this.localeService.getAppCurrentLocale();
  }

  public updateCurrentLocale(locale: Locale): void {
    this.appLocale = this.localeService.setAppCurrentLocale(locale.country);
  }

  public getLocales(): Locale[] {
    return this.localeService.handledLocales;
  }
}
