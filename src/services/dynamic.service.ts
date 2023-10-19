import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class DynamicService {
    
    // variables
    private readonly configPath: string = './assets/dynamics/config.json';
    private config: any = undefined;

    constructor(private http: HttpClient) {
        this.load();
    }

    /**
     * Load dynamic config file.
     */
    private load(): void {
        console.log(`load dynamics: ${this.configPath}`);
        this.http.get(this.configPath)
        .subscribe({
            next: (result: any) => {
                this.config = result;
            }, 
            error: (r: any) => {
                console.error(r);
            }
        })
    }
}