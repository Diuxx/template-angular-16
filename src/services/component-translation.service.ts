import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, Subject, Subscription, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ComponentTranslationService {
  // variables
  private readonly localeUrl = './assets/i18n';

  private testSource = new Subject<any>();
  public test$ = this.testSource.asObservable();

  constructor(
      private translate: TranslateService,
      private http: HttpClient
  ) {
    console.log('init translate!');
  }

  public load(locale: string, component: string): Observable<any> {
      const fullUrl: string = `${this.localeUrl}/${component}/${locale}.json`;
      console.log(`full url: ${fullUrl}`);

      const obs: any = this.http.get(fullUrl)
        .pipe(
          tap((data) => {
            this.translate.setTranslation(locale, data);
            this.translate.use(locale);
            console.log(data);
          })
        );
      return obs;
  }

  public getTranslate(): TranslateService {
    return this.translate;
  }

  public updateLocale(): void {
    this.testSource.next(this.translate.currentLang);
  }
}