/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { InteractionPlantePlanteDetailComponent } from 'app/entities/backend/interaction-plante-plante/interaction-plante-plante-detail.component';
import { InteractionPlantePlante } from 'app/shared/model/backend/interaction-plante-plante.model';

describe('Component Tests', () => {
    describe('InteractionPlantePlante Management Detail Component', () => {
        let comp: InteractionPlantePlanteDetailComponent;
        let fixture: ComponentFixture<InteractionPlantePlanteDetailComponent>;
        const route = ({ data: of({ interactionPlantePlante: new InteractionPlantePlante(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [InteractionPlantePlanteDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(InteractionPlantePlanteDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(InteractionPlantePlanteDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.interactionPlantePlante).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
