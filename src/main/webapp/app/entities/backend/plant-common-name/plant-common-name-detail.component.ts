import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

@Component({
    selector: 'jhi-plant-common-name-detail',
    templateUrl: './plant-common-name-detail.component.html'
})
export class PlantCommonNameDetailComponent implements OnInit {
    plantCommonName: IPlantCommonName;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ plantCommonName }) => {
            this.plantCommonName = plantCommonName;
        });
    }

    previousState() {
        window.history.back();
    }
}
