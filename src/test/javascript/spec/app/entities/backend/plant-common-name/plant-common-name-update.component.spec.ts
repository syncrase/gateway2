/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Gateway2TestModule } from '../../../../test.module';
import { PlantCommonNameUpdateComponent } from 'app/entities/backend/plant-common-name/plant-common-name-update.component';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name/plant-common-name.service';
import { PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

describe('Component Tests', () => {
    describe('PlantCommonName Management Update Component', () => {
        let comp: PlantCommonNameUpdateComponent;
        let fixture: ComponentFixture<PlantCommonNameUpdateComponent>;
        let service: PlantCommonNameService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PlantCommonNameUpdateComponent]
            })
                .overrideTemplate(PlantCommonNameUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(PlantCommonNameUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PlantCommonNameService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity', fakeAsync(() => {
                // GIVEN
                const entity = new PlantCommonName(123);
                spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.plantCommonName = entity;
                // WHEN
                comp.save();
                tick(); // simulate async

                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
            }));

            it('Should call create service on save for new entity', fakeAsync(() => {
                // GIVEN
                const entity = new PlantCommonName();
                spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                comp.plantCommonName = entity;
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
