import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ComponentTranslationService } from 'src/services/component-translation.service';
import { LocaleService } from 'src/services/locale.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {

  // constructor(
  //   private readonly localeService: LocaleService,
  //   private readonly translationService: ComponentTranslationService,
  //   private readonly translate: TranslateService
  // ) {
  //   super();

  //   this.translationService.test$.subscribe(r => {
  //     console.log('home, local has changed');
  //   });
  //   this.loadTranslations();
  // }

  ngOnInit() {

  }

  // private loadTranslations(): void {
  //   const currentLocale: string = this.localeService.getAppCurrentLocale().country;
  //   this.translationService.load(currentLocale, 'home').subscribe(data => {
  //     this.translate.setTranslation(currentLocale, data);
  //     this.translate.use(currentLocale);
  //     console.log(`current lang: ${this.translationService.getTranslate().currentLang}`)
  //   });
  // }
}
