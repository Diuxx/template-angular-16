import { Component } from '@angular/core';
import { DynamicService } from 'src/services/dynamic.service';
import { LocaleService } from 'src/services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private readonly localeService: LocaleService
  ) {
    this.localeService.initLocale();
  }
}
