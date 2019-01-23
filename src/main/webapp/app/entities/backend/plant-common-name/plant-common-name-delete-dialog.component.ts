import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { PlantCommonNameService } from './plant-common-name.service';

@Component({
    selector: 'jhi-plant-common-name-delete-dialog',
    templateUrl: './plant-common-name-delete-dialog.component.html'
})
export class PlantCommonNameDeleteDialogComponent {
    plantCommonName: IPlantCommonName;

    constructor(
        protected plantCommonNameService: PlantCommonNameService,
        public activeModal: NgbActiveModal,
        protected eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.plantCommonNameService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'plantCommonNameListModification',
                content: 'Deleted an plantCommonName'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-plant-common-name-delete-popup',
    template: ''
})
export class PlantCommonNameDeletePopupComponent implements OnInit, OnDestroy {
    protected ngbModalRef: NgbModalRef;

    constructor(protected activatedRoute: ActivatedRoute, protected router: Router, protected modalService: NgbModal) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ plantCommonName }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(PlantCommonNameDeleteDialogComponent as Component, {
                    size: 'lg',
                    backdrop: 'static'
                });
                this.ngbModalRef.componentInstance.plantCommonName = plantCommonName;
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
