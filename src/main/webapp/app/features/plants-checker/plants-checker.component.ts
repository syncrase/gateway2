import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Plante, IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from 'app/entities/backend/plante';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styles: []
})
export class PlantsCheckerComponent implements OnInit {
    plantes$: Observable<Plante[]>;
    plantes: IPlante[];
    private searchTerms = new Subject<string>();

    constructor(private planteService: PlanteService) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
        this.planteService.searchPlantes(term).subscribe(
            (res: HttpResponse<IPlante[]>) => {
                this.plantes = res.body;
            }
            // ,
            // (res: HttpErrorResponse) => this.onError(res.message)
        );
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
