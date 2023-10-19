import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";

const homeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        title: 'Page d\'accueil du best template ever',
        slugs: ['template', 'angular', 'basics', 'dev'],
        meta: {
            description: 'Le meilleur template de la planète'
        }
    }
}

export { homeRoute };