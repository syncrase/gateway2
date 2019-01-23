import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Plante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from 'app/entities/backend/plante';

@Component({
    selector: 'jhi-plants-checker',
    templateUrl: './plants-checker.component.html',
    styles: []
})
export class PlantsCheckerComponent implements OnInit {
    plantes$: Observable<Plante[]>;
    private searchTerms = new Subject<string>();

    constructor(private planteService: PlanteService) {}

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.plantes$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.planteService.searchPlantes(term))
        );
    }
}
