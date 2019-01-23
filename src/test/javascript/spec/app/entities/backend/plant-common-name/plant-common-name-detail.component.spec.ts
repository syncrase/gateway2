/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { PlantCommonNameDetailComponent } from 'app/entities/backend/plant-common-name/plant-common-name-detail.component';
import { PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

describe('Component Tests', () => {
    describe('PlantCommonName Management Detail Component', () => {
        let comp: PlantCommonNameDetailComponent;
        let fixture: ComponentFixture<PlantCommonNameDetailComponent>;
        const route = ({ data: of({ plantCommonName: new PlantCommonName(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PlantCommonNameDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(PlantCommonNameDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PlantCommonNameDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.plantCommonName).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
