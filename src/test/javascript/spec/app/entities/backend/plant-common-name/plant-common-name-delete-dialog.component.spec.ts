/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Gateway2TestModule } from '../../../../test.module';
import { PlantCommonNameDeleteDialogComponent } from 'app/entities/backend/plant-common-name/plant-common-name-delete-dialog.component';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name/plant-common-name.service';

describe('Component Tests', () => {
    describe('PlantCommonName Management Delete Component', () => {
        let comp: PlantCommonNameDeleteDialogComponent;
        let fixture: ComponentFixture<PlantCommonNameDeleteDialogComponent>;
        let service: PlantCommonNameService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [PlantCommonNameDeleteDialogComponent]
            })
                .overrideTemplate(PlantCommonNameDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PlantCommonNameDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PlantCommonNameService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
