/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Gateway2TestModule } from '../../../../test.module';
import { RecolteDeleteDialogComponent } from 'app/entities/backend/recolte/recolte-delete-dialog.component';
import { RecolteService } from 'app/entities/backend/recolte/recolte.service';

describe('Component Tests', () => {
    describe('Recolte Management Delete Component', () => {
        let comp: RecolteDeleteDialogComponent;
        let fixture: ComponentFixture<RecolteDeleteDialogComponent>;
        let service: RecolteService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [RecolteDeleteDialogComponent]
            })
                .overrideTemplate(RecolteDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(RecolteDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RecolteService);
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
