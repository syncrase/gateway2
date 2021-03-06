/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { EnsoleillementDetailComponent } from 'app/entities/backend/ensoleillement/ensoleillement-detail.component';
import { Ensoleillement } from 'app/shared/model/backend/ensoleillement.model';

describe('Component Tests', () => {
    describe('Ensoleillement Management Detail Component', () => {
        let comp: EnsoleillementDetailComponent;
        let fixture: ComponentFixture<EnsoleillementDetailComponent>;
        const route = ({ data: of({ ensoleillement: new Ensoleillement(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [EnsoleillementDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(EnsoleillementDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(EnsoleillementDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.ensoleillement).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
