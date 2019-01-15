/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { VitesseCroissanceDetailComponent } from 'app/entities/backend/vitesse-croissance/vitesse-croissance-detail.component';
import { VitesseCroissance } from 'app/shared/model/backend/vitesse-croissance.model';

describe('Component Tests', () => {
    describe('VitesseCroissance Management Detail Component', () => {
        let comp: VitesseCroissanceDetailComponent;
        let fixture: ComponentFixture<VitesseCroissanceDetailComponent>;
        const route = ({ data: of({ vitesseCroissance: new VitesseCroissance(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [VitesseCroissanceDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(VitesseCroissanceDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(VitesseCroissanceDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.vitesseCroissance).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
