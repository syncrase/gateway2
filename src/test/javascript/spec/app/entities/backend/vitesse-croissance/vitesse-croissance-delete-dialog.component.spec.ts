/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Gateway2TestModule } from '../../../../test.module';
import { VitesseCroissanceDeleteDialogComponent } from 'app/entities/backend/vitesse-croissance/vitesse-croissance-delete-dialog.component';
import { VitesseCroissanceService } from 'app/entities/backend/vitesse-croissance/vitesse-croissance.service';

describe('Component Tests', () => {
    describe('VitesseCroissance Management Delete Component', () => {
        let comp: VitesseCroissanceDeleteDialogComponent;
        let fixture: ComponentFixture<VitesseCroissanceDeleteDialogComponent>;
        let service: VitesseCroissanceService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [VitesseCroissanceDeleteDialogComponent]
            })
                .overrideTemplate(VitesseCroissanceDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(VitesseCroissanceDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(VitesseCroissanceService);
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