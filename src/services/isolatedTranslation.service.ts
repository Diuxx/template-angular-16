import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, Subject, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class IsolatedTranslationService {
  // variables
  private readonly localeUrl = './assets/i18n';
  private localesChangesBroadcast = new Subject<any>();
  public test$ = this.localesChangesBroadcast.asObservable();

  constructor(
      private translate: TranslateService,
      private http: HttpClient
  ) {}

  public load(locale: string, component: string): Observable<any> {
      const fullUrl: string = `${this.localeUrl}/${component}/${locale}.json`;
      return this.http.get(fullUrl);
  }

  public getTranslate(): TranslateService {
    return this.translate;
  }

  public updateLocale(): void {
    this.localesChangesBroadcast.next(this.translate.currentLang);
  }
}