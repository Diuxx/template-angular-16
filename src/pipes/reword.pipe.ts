import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name: 'reword'})
export class Reword implements PipeTransform {
    transform(key: string, ...args: any[]) {
        const keys: string[] = key.split('.');
        return keys.reduce((acc, val) => {
            if (acc == undefined) {
                return undefined;
            }
            return acc[val];
        }, args[0]) ?? key;
    }
}