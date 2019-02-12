import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { debounceTime, distinctUntilChanged, switchMap, mergeMap, tap } from 'rxjs/operators';

import { Plante, IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteServiceFacade } from 'app/entities/backend/plante';
import { PlantCommonNameServiceFacade } from 'app/entities/backend/plant-common-name';
import { IPlantCommonName, PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { ClassificationCronquistService } from 'app/entities/backend/classification-cronquist';
import { IClassificationCronquist, ClassificationCronquist } from 'app/shared/model/backend/classification-cronquist.model';
import { Observable, Subject } from 'rxjs';
import { pipe } from '@angular/core/src/render3';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styleUrls: ['./plants-checker.component.css']
})
export class PlantsCheckerComponent implements OnInit {
    // plantes: IPlante[];
    // plantCommonNames: IPlantCommonName[];
    // selectedPlantes: IPlante[];
    private searchPattern: string;
    listOfSelectedPlants: FullPlant[];
    goodInteractions: IPlante[];

    // Observable test
    commonNames$: Observable<IPlantCommonName[]>;
    private searchCommonName = new Subject<string>();
    plantes$: Observable<IPlante[]>;
    private searchPlante = new Subject<string>();

    constructor(
        private planteServiceFacade: PlanteServiceFacade,
        private plantCommonNameServiceFacade: PlantCommonNameServiceFacade,
        private classificationCronquistService: ClassificationCronquistService
    ) {}

    // searchByPlantCommonName(term: string): void {
    //     // Liste d'opérations à chainer :
    //     //  - Recherche des nom commun dans la table de noms communs
    //     // CommonNameInput
    //     //  - Recherche les ids de noms communs dans la table des plantes
    //     //  - Recherche les classifications de cronquist correspondantes quand j'ai obtenu les plantes
    //     this.plantCommonNameServiceFacade
    //         .searchByPlantCommonName(term)
    //         .pipe(debounceTime(300))
    //         .subscribe((res: HttpResponse<IPlantCommonName[]>) => {
    //             this.plantCommonNames = res.body;
    //             // debugger;

    //             const ids = this.getIdsString(this.plantCommonNames, ',');
    //             this.planteServiceFacade.searchPlantsByPlantCommonNameIds(ids).subscribe((res2: HttpResponse<IPlante[]>) => {
    //                 this.plantes = res2.body;
    //             });
    //         });
    // }

    // REST separator is ','
    getIdsString(array: IPlantCommonName[], separator: string): string {
        const length = array.length;
        let ids = '';
        for (let i = 0; i < length; i++) {
            ids += array[i].id + (i === length - 1 ? '' : separator);
        }
        return ids;
    }

    searchPlantByPlantCommonName(term: string): void {
        // checks: if term isn't an empty string and if it isn't the same value as before
        // if (term.trim() && this.searchPattern !== term) {
        //     this.searchPattern = term;
        //     this.searchByPlantCommonName(term);
        // }

        this.searchCommonName.next(term);
        // debugger;
        // const ids = this.getIdsString(this.plantCommonNames, ',');
        // this.searchPlante.next(ids);
        // debugger;
    }

    ngOnInit(): void {
        this.listOfSelectedPlants = [];
        this.goodInteractions = [];

        this.commonNames$ = this.searchCommonName.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),
            // ignore new term if same as previous term
            distinctUntilChanged(),
            // switch to new search observable each time the term changes
            switchMap((term: string) => this.plantCommonNameServiceFacade.searchCommonNames(term)),
            // mergeMap()
            tap(console.log)
        );
        this.commonNames$.subscribe();
        this.plantes$ = this.commonNames$.pipe(
            // wait 300ms after each keystroke before considering the term
            // debounceTime(300),
            // ignore new term if same as previous term
            distinctUntilChanged(),
            // switch to new search observable each time the term changes
            switchMap((plants: IPlantCommonName[]) =>
                this.planteServiceFacade.searchPlantsByPlantCommonNameIdsWithNoObserver(this.getIdsString(plants, ','))
            ),
            tap(console.log)
        );
        this.plantes$.subscribe();
    }

    addPlant(plante: Plante) {
        if (!this.listOfSelectedPlants.find(p => p.plante.id === plante.id)) {
            this.classificationCronquistService
                .find(plante.classificationCronquistId)
                .subscribe((res3: HttpResponse<IClassificationCronquist>) => {
                    const pl: FullPlant = new FullPlant();
                    pl.classificationCronquist = res3.body;
                    pl.plante = plante;
                    this.listOfSelectedPlants.push(pl);
                });
        }
    }

    purgePlantResearch() {
        // this.plantes = [];
        // this.plantCommonNames = [];
    }

    deletePlant(plante: Plante) {
        this.listOfSelectedPlants = this.listOfSelectedPlants.filter(sp => sp.plante !== plante);
    }
}

class FullPlant {
    plante: IPlante;
    classificationCronquist: ClassificationCronquist;
}
