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

    // Function to remove an entity from the encounter list, based on the id of the selected entity
    deleteEntity(entity: Entity | number) {
        const id = typeof entity === 'number' ? entity : entity._id;
        this.entities = this.entities.filter(e => e._id !== id);
    }

    // Remove all entities from the encounter list
    clear() {
        this.entities = [];
    }
}
