import { Directive } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { SeoRef } from "src/models/seoRef.model";

@Directive()
export class BaseComponent {
    private seoRef!: SeoRef;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private titleService: Title
    ) {
        this.seoRef = this.route.snapshot.data as SeoRef;
        console.log('seoRefs:', this.seoRef);

        this.setTitle();
    }

    private setTitle(): void {
        this.titleService.setTitle(this.seoRef.title);
    }
}