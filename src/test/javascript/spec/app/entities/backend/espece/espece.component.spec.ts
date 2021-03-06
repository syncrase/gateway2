/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { EspeceComponent } from 'app/entities/backend/espece/espece.component';
import { EspeceService } from 'app/entities/backend/espece/espece.service';
import { Espece } from 'app/shared/model/backend/espece.model';

describe('Component Tests', () => {
    describe('Espece Management Component', () => {
        let comp: EspeceComponent;
        let fixture: ComponentFixture<EspeceComponent>;
        let service: EspeceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [EspeceComponent],
                providers: []
            })
                .overrideTemplate(EspeceComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(EspeceComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EspeceService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new Espece(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.especes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
