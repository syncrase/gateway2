import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPageWeb } from 'app/shared/model/backend/page-web.model';

@Component({
    selector: 'jhi-page-web-detail',
    templateUrl: './page-web-detail.component.html'
})
export class PageWebDetailComponent implements OnInit {
    pageWeb: IPageWeb;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ pageWeb }) => {
            this.pageWeb = pageWeb;
        });
    }

    previousState() {
        window.history.back();
    }
}
