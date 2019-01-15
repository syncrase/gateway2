/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { Gateway2TestModule } from '../../../../test.module';
import { FloraisonDeleteDialogComponent } from 'app/entities/backend/floraison/floraison-delete-dialog.component';
import { FloraisonService } from 'app/entities/backend/floraison/floraison.service';

describe('Component Tests', () => {
    describe('Floraison Management Delete Component', () => {
        let comp: FloraisonDeleteDialogComponent;
        let fixture: ComponentFixture<FloraisonDeleteDialogComponent>;
        let service: FloraisonService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [Gateway2TestModule],
                declarations: [FloraisonDeleteDialogComponent]
            })
                .overrideTemplate(FloraisonDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(FloraisonDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FloraisonService);
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
