import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILivre } from 'app/shared/model/backend/livre.model';

@Component({
    selector: 'jhi-livre-detail',
    templateUrl: './livre-detail.component.html'
})
export class LivreDetailComponent implements OnInit {
    livre: ILivre;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ livre }) => {
            this.livre = livre;
        });
    }

    previousState() {
        window.history.back();
    }
}
