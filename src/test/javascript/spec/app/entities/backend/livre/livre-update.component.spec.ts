/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { LivreUpdateComponent } from 'app/entities/backend/livre/livre-update.component';
import { LivreService } from 'app/entities/backend/livre/livre.service';
import { Livre } from 'app/shared/model/backend/livre.model';

describe('Component Tests', () => {
    describe('Livre Management Update Component', () => {
        let comp: LivreUpdateComponent;
        let fixture: ComponentFixture<LivreUpdateComponent>;
        let service: LivreService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [LivreUpdateComponent]
            })
                .overrideTemplate(LivreUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(LivreUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(LivreService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new Livre(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.livre = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new Livre();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.livre = entity;
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
