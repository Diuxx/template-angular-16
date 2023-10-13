import { Injectable } from "@angular/core";
import { Locale } from "src/models/local.model";

@Injectable({
    providedIn: 'root',
})
export class LocaleService {
    
    // variables
    public handledLocales: Locale[] = [
        { id: 1, code: 'fr-FR', country: 'fr', name: 'français' },
        { id: 2, code: 'en-US', country: 'us', name: 'anglais' }
    ];
    public default: Locale = this.handledLocales[0];
    private readonly localeKey: string = 'locale';

    /**
     * Init application locale.
     */
    private initLocale(): void {
        if (localStorage.getItem(this.localeKey) === null) {
            localStorage.setItem(this.localeKey, JSON.stringify(this.default));
        }
    }

    private storeLocale(locale: Locale): void {
        localStorage.setItem(this.localeKey, JSON.stringify(locale));
    }

    /**
     * Gets from the local storage application locale.
     * @returns current app locale.
     */
    public getAppCurrentLocale(): Locale {
        this.initLocale(); // will avoid if locale already exist.
        return JSON.parse(localStorage.getItem(this.localeKey) as string) ?? this.handledLocales[0];
    }

    /**
     * Set app current locale.
     */
    public setAppCurrentLocale(locale: Locale): Locale {
        const localExist: boolean = this.handledLocales.some(l => JSON.stringify(l) === JSON.stringify(locale)); 
        if (localExist) {
            this.storeLocale(locale);
            return locale;
        } 
        
        this.initLocale();    
        return this.default;
    }

    // infos
    // https://medium.com/beingcoders/simple-steps-to-add-country-flags-to-your-angular-react-or-vue-applications-b415da1536ab

    // todo: translate les locales names.
}