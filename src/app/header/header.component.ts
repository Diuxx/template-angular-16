import { ChangeDetectorRef, Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Locale } from 'src/models/local.model';
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
    private localService: LocaleService,
    private ref: ChangeDetectorRef
    ) {
    console.log(`prod ${environment.production}`);
    this.appName = environment.appName;
    this.appLocale = this.localService.getAppCurrentLocale();
  }

  public updateCurrentLocale(locale: Locale): void {
    this.appLocale = this.localService.setAppCurrentLocale(locale);
  }

  public getLocales(): Locale[] {
    return this.localService.handledLocales;
  }
}
