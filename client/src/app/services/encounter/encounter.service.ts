import { Injectable } from '@angular/core';

import { Entity } from '../../interfaces/entity';

@Injectable({ providedIn: 'root' })
export class EncounterService {
    entities: Entity[] = [];

    // Function to add an entity to the encounter list
    addEntity(entity: Entity) {
        entity._id = this.entities.length * Math.random(); // ID generated is random id based on number of entities
        entity.initiative = 0; // Default initiative is 0
        this.entities.push(entity);
    }

    // Remove all entities from the encounter list
    clear() {
        this.entities = [];
    }
}
