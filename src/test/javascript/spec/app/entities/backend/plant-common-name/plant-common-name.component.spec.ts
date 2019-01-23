/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { PlantCommonNameComponent } from 'app/entities/backend/plant-common-name/plant-common-name.component';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name/plant-common-name.service';
import { PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

describe('Component Tests', () => {
    describe('PlantCommonName Management Component', () => {
        let comp: PlantCommonNameComponent;
        let fixture: ComponentFixture<PlantCommonNameComponent>;
        let service: PlantCommonNameService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PlantCommonNameComponent],
                providers: []
            })
                .overrideTemplate(PlantCommonNameComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PlantCommonNameComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PlantCommonNameService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new PlantCommonName(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.plantCommonNames[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
