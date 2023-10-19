import { Component } from '@angular/core';
import { LocaleService } from 'src/services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private readonly localeService: LocaleService) {
    this.localeService.initLocale();
  }
}
