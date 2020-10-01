import { Injectable } from '@angular/core';

import { Entity } from '../../interfaces/entity';

@Injectable({ providedIn: 'root' })
export class EncounterService {
    entities: Entity[] = [];

    addEntity(entity: Entity) {
        console.log(entity);
        this.entities.push(entity);
    }

    clear() {
        this.entities = [];
    }
}
