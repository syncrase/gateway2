import { Route } from '@angular/router';

import { BlurbComponent } from './';

export const BLURB_ROUTE: Route = {
    path: 'blurb',
    component: BlurbComponent,
    data: {
        authorities: [],
        pageTitle: 'Vous avez dit interactions?'
    }
};
