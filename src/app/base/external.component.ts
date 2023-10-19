import { Component, Input, inject } from "@angular/core";
import { Dynamic } from "src/models/dynamic.model";
import { DynamicService } from "src/services/dynamic.service";

@Component({
    selector: 'app-external',
    template: ``,
    styles: []
})
export class ExternalComponent {
    // dependance
    private dynamicService = inject(DynamicService);

    // variables
    public html!: string;
    public css!: string;
    public load: boolean = true;
    private _dynamic!: string;
    private data!: Dynamic;

    // inputs
    @Input({required: true}) set dynamic(value: string) {
        this._dynamic = value;
        this.dynamicService
            .loadConfig()
            .subscribe(async config => {
                this.data = this.dynamicService.getPage(this._dynamic, config);
                console.log(value, this.data);

            this.html = await this.dynamicService.loadHtml(this.data.html);
            if (this.html) {
                this.dynamicService.loadStyle(this.data.css);
            }
            this.load = false;
        });
    }
}