import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Gateway2PlanteModule as BackendPlanteModule } from './backend/plante/plante.module';
import { Gateway2RecolteModule as BackendRecolteModule } from './backend/recolte/recolte.module';
import { Gateway2FloraisonModule as BackendFloraisonModule } from './backend/floraison/floraison.module';
import { Gateway2ClassificationCronquistModule as BackendClassificationCronquistModule } from './backend/classification-cronquist/classification-cronquist.module';
import { Gateway2OrdreModule as BackendOrdreModule } from './backend/ordre/ordre.module';
import { Gateway2FamilleModule as BackendFamilleModule } from './backend/famille/famille.module';
import { Gateway2GenreModule as BackendGenreModule } from './backend/genre/genre.module';
import { Gateway2EspeceModule as BackendEspeceModule } from './backend/espece/espece.module';
import { Gateway2InteractionPlantePlanteModule as BackendInteractionPlantePlanteModule } from './backend/interaction-plante-plante/interaction-plante-plante.module';
import { Gateway2StrateModule as BackendStrateModule } from './backend/strate/strate.module';
import { Gateway2VitesseCroissanceModule as BackendVitesseCroissanceModule } from './backend/vitesse-croissance/vitesse-croissance.module';
import { Gateway2EnsoleillementModule as BackendEnsoleillementModule } from './backend/ensoleillement/ensoleillement.module';
import { Gateway2RichesseSolModule as BackendRichesseSolModule } from './backend/richesse-sol/richesse-sol.module';
import { Gateway2TypeTerreModule as BackendTypeTerreModule } from './backend/type-terre/type-terre.module';
import { Gateway2TypeFeuillageModule as BackendTypeFeuillageModule } from './backend/type-feuillage/type-feuillage.module';
import { Gateway2TypeRacineModule as BackendTypeRacineModule } from './backend/type-racine/type-racine.module';
import { Gateway2MoisModule as BackendMoisModule } from './backend/mois/mois.module';
import { Gateway2PlanteModule } from './plante/plante.module';
import { Gateway2RecolteModule } from './recolte/recolte.module';
import { Gateway2FloraisonModule } from './floraison/floraison.module';
import { Gateway2MoisModule } from './mois/mois.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BackendPlanteModule,
        BackendRecolteModule,
        BackendFloraisonModule,
        BackendClassificationCronquistModule,
        BackendOrdreModule,
        BackendFamilleModule,
        BackendGenreModule,
        BackendEspeceModule,
        BackendInteractionPlantePlanteModule,
        BackendStrateModule,
        BackendVitesseCroissanceModule,
        BackendEnsoleillementModule,
        BackendRichesseSolModule,
        BackendTypeTerreModule,
        BackendTypeFeuillageModule,
        BackendTypeRacineModule,
        BackendMoisModule,
        Gateway2PlanteModule,
        Gateway2RecolteModule,
        Gateway2FloraisonModule,
        Gateway2MoisModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2EntityModule {}
