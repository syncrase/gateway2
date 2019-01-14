/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { VitesseCroissanceComponent } from 'app/entities/backend/vitesse-croissance/vitesse-croissance.component';
import { VitesseCroissanceService } from 'app/entities/backend/vitesse-croissance/vitesse-croissance.service';
import { VitesseCroissance } from 'app/shared/model/backend/vitesse-croissance.model';

describe('Component Tests', () => {
    describe('VitesseCroissance Management Component', () => {
        let comp: VitesseCroissanceComponent;
        let fixture: ComponentFixture<VitesseCroissanceComponent>;
        let service: VitesseCroissanceService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [VitesseCroissanceComponent],
                providers: []
            })
                .overrideTemplate(VitesseCroissanceComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(VitesseCroissanceComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(VitesseCroissanceService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new VitesseCroissance(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.vitesseCroissances[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
