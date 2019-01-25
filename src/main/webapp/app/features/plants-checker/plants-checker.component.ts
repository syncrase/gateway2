import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Plante, IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from 'app/entities/backend/plante';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name';
import { IPlantCommonName, PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styles: []
})
export class PlantsCheckerComponent implements OnInit {
    plantes: IPlante[];
    plantCommonNames: IPlantCommonName[];

    private searchPattern: string;

    constructor(private planteService: PlanteService, private plantCommonNameService: PlantCommonNameService) {}

    searchByPlantCommonName(term: string): void {
        this.plantCommonNameService
            .searchByPlantCommonName(term)
            .pipe(debounceTime(300))
            .subscribe((res: HttpResponse<IPlantCommonName[]>) => {
                this.plantCommonNames = res.body;
                debugger;
                const length = this.plantCommonNames.length;
                let ids = '';
                for (let _i = 0; _i < length; _i++) {
                    ids += this.plantCommonNames[_i].id + (_i === length - 1 ? '' : ',');
                }

                // console.log(ids);
                this.planteService.searchPlantByPlantCommonNameIds(ids).subscribe((res2: HttpResponse<IPlante[]>) => {
                    this.plantes = res2.body;
                });
            });
    }

    searchPlantByPlantCommonName(term: string): void {
        // checks: if term isn't an empty string and if it isn't the same value as before
        if (term.trim() && this.searchPattern !== term) {
            debugger;
            this.searchPattern = term;
            this.searchByPlantCommonName(term);
        }
    }

    ngOnInit(): void {}
}
