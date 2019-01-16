/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Gateway2TestModule } from '../../../../test.module';
import { PageWebComponent } from 'app/entities/backend/page-web/page-web.component';
import { PageWebService } from 'app/entities/backend/page-web/page-web.service';
import { PageWeb } from 'app/shared/model/backend/page-web.model';

describe('Component Tests', () => {
    describe('PageWeb Management Component', () => {
        let comp: PageWebComponent;
        let fixture: ComponentFixture<PageWebComponent>;
        let service: PageWebService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PageWebComponent],
                providers: []
            })
                .overrideTemplate(PageWebComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PageWebComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PageWebService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(
                of(
                    new HttpResponse({
                        body: [new PageWeb(123)],
                        headers
                    })
                )
            );

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.pageWebs[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });
    });
});
