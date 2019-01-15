/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { FloraisonComponent } from 'app/entities/backend/floraison/floraison.component';
import { FloraisonService } from 'app/entities/backend/floraison/floraison.service';
import { Floraison } from 'app/shared/model/backend/floraison.model';

describe('Component Tests', () => {
    describe('Floraison Management Component', () => {
        let comp: FloraisonComponent;
        let fixture: ComponentFixture<FloraisonComponent>;
        let service: FloraisonService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [FloraisonComponent],
                providers: []
            })
                .overrideTemplate(FloraisonComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(FloraisonComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FloraisonService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Floraison(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.floraisons[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
