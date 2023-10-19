import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { Locale } from "src/models/locale.model";
import { ComponentTranslationService } from "./component-translation.service";

@Injectable({
    providedIn: 'root',
})
export class LocaleService {
    
    // variables
    public handledLocales: Locale[] = [
        { id: 1, code: 'fr-FR', country: 'fr', name: 'français' },
        { id: 2, code: 'en-US', country: 'en', name: 'anglais' }
    ];
    public default: Locale = this.handledLocales[0];
    private readonly localeKey: string = 'locale';
    
    constructor(
        private readonly translate: TranslateService,
        private readonly globalTranslationService: ComponentTranslationService)  {}

    /**
     * Init application locale.
     */
    public initLocale(): string {
        const storedLang = localStorage.getItem(this.localeKey);
        if (!storedLang) {
            // gets browser default lang otherwise use the stored one.
            let browserDefaultLang: string = this.translate.getBrowserLang() ?? environment.defaultLang;
            console.log(`Default locale: ${browserDefaultLang}`);

            if (!this.handledLocales.some(l => l.country === browserDefaultLang)) {
                browserDefaultLang = environment.defaultLang;
            }
            this.translate.setDefaultLang(browserDefaultLang);
            localStorage.setItem(this.localeKey, browserDefaultLang);
            return browserDefaultLang;
        }

        // if stored locale is not handled just remove and call the function again.
        if (!this.handledLocales.some(l => l.country === storedLang)) {
            localStorage.removeItem(this.localeKey);
            return this.initLocale();
        }

        return storedLang;
    }

    /**
     * Gets from the local storage application locale.
     * @returns current app locale.
     */
    public getAppCurrentLocale(): Locale {
        const storedLang = this.initLocale(); // will avoid if locale already exist.
        return this.handledLocales.find(l => l.country === storedLang) ?? this.default;
    }

    /**
     * Set app current locale.
     */
    public setAppCurrentLocale(lang: string): Locale {
        localStorage.setItem(this.localeKey, lang);
        let result = this.getAppCurrentLocale();

        this.globalTranslationService.updateLocale();
        return result;
    }

    // infos
    // https://medium.com/beingcoders/simple-steps-to-add-country-flags-to-your-angular-react-or-vue-applications-b415da1536ab

    // todo: translate les locales names.
}