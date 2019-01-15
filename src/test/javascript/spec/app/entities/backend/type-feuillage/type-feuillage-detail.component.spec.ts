/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { TypeFeuillageDetailComponent } from 'app/entities/backend/type-feuillage/type-feuillage-detail.component';
import { TypeFeuillage } from 'app/shared/model/backend/type-feuillage.model';

describe('Component Tests', () => {
    describe('TypeFeuillage Management Detail Component', () => {
        let comp: TypeFeuillageDetailComponent;
        let fixture: ComponentFixture<TypeFeuillageDetailComponent>;
        const route = ({ data: of({ typeFeuillage: new TypeFeuillage(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [TypeFeuillageDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(TypeFeuillageDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(TypeFeuillageDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.typeFeuillage).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
