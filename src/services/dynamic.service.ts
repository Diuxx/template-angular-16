import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

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

    public loadConfig(): Observable<any> {
        return this.http.get(this.configPath).pipe(tap((data) => console.log(data)));
    }

    public async loadHtml(path: string): Promise<any> {
        return this.http.get(path, { responseType: "text" }).toPromise();
    }

    public loadStyle(path: string) {
        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = path;
        document.head.appendChild(style);
    }

    public getPage(code: string, config: any): any {
        return config['pages'].find((e: any) => e.id == code);
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