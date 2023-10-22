import { Component, inject } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { SeoRef } from "src/models/seoRef.model";
import { IsolatedTranslationService } from "src/services/isolatedTranslation.service";
import { LocaleService } from "src/services/locale.service";

@Component({
    selector: 'app-base',
    template: ``,
    styles: []
})
export class BaseComponent {
    public translations: any = undefined;
    private seoRef!: SeoRef;
    private componentName: string = 'default';
    
    // injects
    private route = inject(ActivatedRoute); 
    private titleService = inject(Title);
    private metaService = inject(Meta);
    private localeService = inject(LocaleService);
    private translationService = inject(IsolatedTranslationService);
    private translate = inject(TranslateService);

    constructor() {
        this.seoRef = this.route.snapshot.data as SeoRef;
        this.componentName = this.constructor.name
            .toLowerCase()
            .replace('component', '');

        console.log('seoRefs:', this.seoRef, this.componentName);

        // seo data
        this.setTitle();
        this.setMeta();
        this.setSlugs();

        // load translations
        this.loadTranslations();
        this.translationService.test$.subscribe(r => this.loadTranslations());
    }

    public setTranslations(data: any): void {
        this.translations = data;
    }

    private setTitle(): void {
        this.titleService.setTitle(`${environment.appName} | ${this.seoRef.title}`);
    }

    private setMeta(): void {
        for(let key of Object.keys(this.seoRef.meta)) {
            this.metaService.addTag({
                name: key,
                content: this.seoRef.meta[key]
            })
        }
    }

    private setSlugs(): void {
        
    }

    private loadTranslations(): void {
        const currentLocale: string = this.localeService.getAppCurrentLocale().country;
        this.translationService.load(currentLocale, this.componentName).subscribe(data => {
          this.setTranslations(data);
          this.translate.use(currentLocale);
        });
    }
}