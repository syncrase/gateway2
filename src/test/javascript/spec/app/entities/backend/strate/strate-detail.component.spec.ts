/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { StrateDetailComponent } from 'app/entities/backend/strate/strate-detail.component';
import { Strate } from 'app/shared/model/backend/strate.model';

describe('Component Tests', () => {
    describe('Strate Management Detail Component', () => {
        let comp: StrateDetailComponent;
        let fixture: ComponentFixture<StrateDetailComponent>;
        const route = ({ data: of({ strate: new Strate(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [StrateDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(StrateDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StrateDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.strate).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
