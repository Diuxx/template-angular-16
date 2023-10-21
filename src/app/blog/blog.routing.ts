import { Route } from "@angular/router";
import { BlogComponent } from "./blog.component";

const blogRoute: Route = {
    path: 'blog',
    component: BlogComponent,
    data: {
        title: 'Seconde page du best template ever',
        slugs: ['template', 'angular', 'basics', 'dev'],
        meta: {
            description: 'Le meilleur template de la planète',
            'x:description': "Le meilleur template de la planète"
        }
    }
}

export { blogRoute };