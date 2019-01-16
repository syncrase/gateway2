/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { PageWebUpdateComponent } from 'app/entities/backend/page-web/page-web-update.component';
import { PageWebService } from 'app/entities/backend/page-web/page-web.service';
import { PageWeb } from 'app/shared/model/backend/page-web.model';

describe('Component Tests', () => {
    describe('PageWeb Management Update Component', () => {
        let comp: PageWebUpdateComponent;
        let fixture: ComponentFixture<PageWebUpdateComponent>;
        let service: PageWebService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PageWebUpdateComponent]
            })
                .overrideTemplate(PageWebUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PageWebUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PageWebService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new PageWeb(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.pageWeb = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new PageWeb();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.pageWeb = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));
        });
    });
});
