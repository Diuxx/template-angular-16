export class Locale {
    public id: number;
    public code: string;
    public country: string;
    public name: string;

    constructor(id: number, code: string, country: string, name: string)
    {
        this.id = id;
        this.code = code;
        this.country = country;
        this.name = name;
    }
}