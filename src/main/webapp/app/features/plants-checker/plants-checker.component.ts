import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Plante, IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from 'app/entities/backend/plante';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name';
import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styles: []
})
export class PlantsCheckerComponent implements OnInit {
    plantes$: Observable<Plante[]>;
    plantes: IPlante[];
    plantCommonNames: IPlantCommonName[];
    // private searchTerms = new Subject<string>();
    private searchPattern: string;

    constructor(private planteService: PlanteService, private plantCommonNameService: PlantCommonNameService) {}

    searchByPlantId(term: string): void {
        // this.searchTerms.next(term);
        this.planteService.searchByPlantId(term).subscribe((res: HttpResponse<IPlante[]>) => {
            this.plantes = res.body;
        });
    }

    searchByPlantCommonName(term: string): void {
        this.plantCommonNameService.searchByPlantCommonName(term).subscribe((res: HttpResponse<IPlantCommonName[]>) => {
            this.plantCommonNames = res.body;
            // console.log(this.plantCommonNames.length);
            // const length = this.plantCommonNames.length;
            // let ids = '';
            // for (let _i = 0; _i < length; _i++) {
            //     ids += this.plantCommonNames[_i].id + (_i === length - 1 ? '' : ',');
            //     // ids.push(+this.plantCommonNames[_i]);
            // }

            // // console.log(ids);
            // this.planteService.searchPlantByPlantCommonNameIds(ids).subscribe(
            //     (res2: HttpResponse<IPlante[]>) => {
            //         console.log(this.plantes.length);
            //         this.plantes = res2.body;
            //         console.log(this.plantes.length);
            //     }
            // );
        });
    }

    searchPlantByPlantCommonName(term: string): void {
        // checks: if term isn't an empty string and if it isn't the same value as before
        if (term.trim() && this.searchPattern !== term) {
            this.searchPattern = term;
            // this.plantCommonNames = null;
            this.searchByPlantCommonName(term);
            // console.log(this.plantCommonNames.length);
            const length = this.plantCommonNames.length;
            let ids = '';
            for (let _i = 0; _i < length; _i++) {
                ids += this.plantCommonNames[_i].id + (_i === length - 1 ? '' : ',');
                // ids.push(+this.plantCommonNames[_i]);
            }

            // console.log(ids);
            this.planteService.searchPlantByPlantCommonNameIds(ids).subscribe((res2: HttpResponse<IPlante[]>) => {
                this.plantes = res2.body;
            });
        }
        // HOWTO use observable in order to wait after ms before mamke the request?
    }

    ngOnInit(): void {
        // this.plantes$ = this.searchTerms.pipe(
        //     // wait 300ms after each keystroke before considering the term
        //     debounceTime(300),
        //     // ignore new term if same as previous term
        //     distinctUntilChanged(),
        //     // switch to new search observable each time the term changes
        //     switchMap((term: string) => this.planteService.searchPlantes(term))
        // );
    }
}
