/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { PageWebDetailComponent } from 'app/entities/backend/page-web/page-web-detail.component';
import { PageWeb } from 'app/shared/model/backend/page-web.model';

describe('Component Tests', () => {
    describe('PageWeb Management Detail Component', () => {
        let comp: PageWebDetailComponent;
        let fixture: ComponentFixture<PageWebDetailComponent>;
        const route = ({ data: of({ pageWeb: new PageWeb(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PageWebDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(PageWebDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PageWebDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.pageWeb).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
