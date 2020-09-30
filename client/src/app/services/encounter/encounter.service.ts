import { Injectable } from '@angular/core';

import { Entity } from '../../interfaces/entity';

@Injectable({ providedIn: 'root' })
export class EncounterService {
    entities: Entity[] = [];

    add(entity: Entity) {
        this.entities.push(entity);
    }

    clear() {
        this.entities = [];
    }
}
