import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { debounceTime } from 'rxjs/operators';

import { Plante, IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteServiceFacade } from 'app/entities/backend/plante';
import { PlantCommonNameServiceFacade } from 'app/entities/backend/plant-common-name';
import { IPlantCommonName, PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { ClassificationCronquistService } from 'app/entities/backend/classification-cronquist';
import { IClassificationCronquist, ClassificationCronquist } from 'app/shared/model/backend/classification-cronquist.model';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styleUrls: ['./plants-checker.component.css']
})
export class PlantsCheckerComponent implements OnInit {
    plantes: IPlante[];
    plantCommonNames: IPlantCommonName[];
    // selectedPlantes: IPlante[];
    private searchPattern: string;
    listOfSelectedPlants: FullPlant[];
    goodInteractions: IPlante[];

    constructor(
        private planteServiceFacade: PlanteServiceFacade,
        private plantCommonNameServiceFacade: PlantCommonNameServiceFacade,
        private classificationCronquistService: ClassificationCronquistService
    ) {}

    searchByPlantCommonName(term: string): void {
        // Liste d'opérations à chainer :
        //  - Recherche des nom commun dans la table de noms communs
        //  - Recherche les ids de noms communs dans la table des plantes
        //  - Recherche les classifications de cronquist correspondantes quand j'ai obtenu les plantes
        this.plantCommonNameServiceFacade
            .searchByPlantCommonName(term)
            .pipe(debounceTime(300))
            .subscribe((res: HttpResponse<IPlantCommonName[]>) => {
                this.plantCommonNames = res.body;
                // debugger;
                const length = this.plantCommonNames.length;
                let ids = '';
                for (let i = 0; i < length; i++) {
                    ids += this.plantCommonNames[i].id + (i === length - 1 ? '' : ',');
                }

                this.planteServiceFacade.searchPlantsByPlantCommonNameIds(ids).subscribe((res2: HttpResponse<IPlante[]>) => {
                    this.plantes = res2.body;
                });
            });
    }

    searchPlantByPlantCommonName(term: string): void {
        // checks: if term isn't an empty string and if it isn't the same value as before
        if (term.trim() && this.searchPattern !== term) {
            // debugger;
            this.searchPattern = term;
            this.searchByPlantCommonName(term);
        }
    }

    ngOnInit(): void {
        // this.selectedPlantes = [];
        this.listOfSelectedPlants = [];
        this.goodInteractions = [];
    }

    test(value: string) {
        console.log(value);
    }

    addPlant(plante: Plante) {
        // console.log(plante);
        if (!this.listOfSelectedPlants.find(p => p.plante.id === plante.id)) {
            this.classificationCronquistService
                .find(plante.classificationCronquistId)
                .subscribe((res3: HttpResponse<IClassificationCronquist>) => {
                    const pl: FullPlant = new FullPlant();
                    pl.classificationCronquist = res3.body;
                    pl.plante = plante;
                    pl.plantCommonNames = plante.plantCommonNames;
                    this.listOfSelectedPlants.push(pl);
                });
        }

        // if (!this.selectedPlantes.find(p => p.id === plante.id)) {
        //     this.selectedPlantes.push(plante);

        //     this.classificationCronquistService.find(plante.classificationCronquistId)
        //         .subscribe((res3: HttpResponse<IClassificationCronquist>) => {
        //             const pl: FullPlant = new FullPlant();

        //             pl.classificationCronquist = res3.body;

        //             pl.plante = plante;
        //             pl.plantCommonNames = plante.plantCommonNames;
        //             this.listOfSelectedPlants.push(pl);
        //             debugger;
        //         });
        // }
    }

    purgePlantResearch() {
        this.plantes = [];
        this.plantCommonNames = [];
    }

    deletePlant(plante: Plante) {
        // this.selectedPlantes = this.selectedPlantes.filter(p => p !== plante);
        this.listOfSelectedPlants = this.listOfSelectedPlants.filter(sp => sp.plante !== plante);
    }
}

class FullPlant {
    plante: IPlante;
    plantCommonNames: IPlantCommonName[];
    classificationCronquist: ClassificationCronquist;
}
