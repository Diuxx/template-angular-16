import { Route } from "@angular/router";
import { LetMeTasteItComponent } from "./let-me-taste-it.component";

const LetMeTasteItRoute: Route = {
    path: 'let-me-taste-it',
    component: LetMeTasteItComponent,
    data: {
        title: 'Faire la manche sur internet...',
        slugs: ['template', 'angular', 'basics', 'dev'],
        meta: {
            description: 'Le meilleur template de la planète',
            'x:description': "Le meilleur template de la planète"
        }
    }
}

export { LetMeTasteItRoute };