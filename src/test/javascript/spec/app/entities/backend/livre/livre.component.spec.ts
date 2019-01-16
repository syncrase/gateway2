/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { LivreComponent } from 'app/entities/backend/livre/livre.component';
import { LivreService } from 'app/entities/backend/livre/livre.service';
import { Livre } from 'app/shared/model/backend/livre.model';

describe('Component Tests', () => {
    describe('Livre Management Component', () => {
        let comp: LivreComponent;
        let fixture: ComponentFixture<LivreComponent>;
        let service: LivreService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [LivreComponent],
                providers: []
            })
                .overrideTemplate(LivreComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(LivreComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LivreService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Livre(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.livres[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
