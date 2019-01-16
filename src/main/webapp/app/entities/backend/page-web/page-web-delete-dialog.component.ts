import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPageWeb } from 'app/shared/model/backend/page-web.model';
import { PageWebService } from './page-web.service';

@Component({
    selector: 'jhi-page-web-delete-dialog',
    templateUrl: './page-web-delete-dialog.component.html'
})
export class PageWebDeleteDialogComponent {
    pageWeb: IPageWeb;

    constructor(protected pageWebService: PageWebService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.pageWebService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'pageWebListModification',
                content: 'Deleted an pageWeb'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-page-web-delete-popup',
    template: ''
})
export class PageWebDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ pageWeb }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PageWebDeleteDialogComponent as Component, { size: 'lg', backdrop: 'static' });
                this.ngbModalRef.componentInstance.pageWeb = pageWeb;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true, queryParamsHandling: 'merge' });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
