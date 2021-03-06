/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { ClassificationCronquistDetailComponent } from 'app/entities/backend/classification-cronquist/classification-cronquist-detail.component';
import { ClassificationCronquist } from 'app/shared/model/backend/classification-cronquist.model';

describe('Component Tests', () => {
    describe('ClassificationCronquist Management Detail Component', () => {
        let comp: ClassificationCronquistDetailComponent;
        let fixture: ComponentFixture<ClassificationCronquistDetailComponent>;
        const route = ({ data: of({ classificationCronquist: new ClassificationCronquist(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [ClassificationCronquistDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ClassificationCronquistDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ClassificationCronquistDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.classificationCronquist).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
