import { Injectable } from '@angular/core';

import { Entity } from '../../interfaces/entity';

@Injectable({ providedIn: 'root' })
export class EncounterService {
    entities: Entity[] = [];

    // Function to add an entity to the encounter list
    addEntity(entity: Entity): void {
        // entity._id = this.entities.length * Math.random(); // ID generated is random id based on number of entities
        entity.initiative = undefined; // Default initiative is undefined
        this.entities.push(entity);
    }

    // Function to remove an entity from the encounter list, based on the id of the selected entity
    deleteEntity(entity: Entity | number): void {
        const id = typeof entity === 'number' ? entity : entity._id;
        this.entities = this.entities.filter(e => e._id !== id);
    }

    // Function to generate initiative for all entities, ordering the encounter list from highest to lowest
    rollInitiative(): void {
        this.entities.map(entity => {
            entity.initiative = Math.ceil(Math.random() * 20) + entity.initiativeMod;
        });

        this.entities.sort((a, b) => {
            return b.initiative - a.initiative;
        });
    }

    // Function to clear all initiative rolls from encounter list
    clearInitiative(): void {
        this.entities.map(entity => {
            entity.initiative = undefined;
        });
    }

    // Remove all entities from the encounter list
    clearEntities(): void {
        this.entities = [];
    }
}
