import { Component, OnInit } from '@angular/core';

import { Entity } from '../../interfaces/entity';

import { EncounterService } from '../../services/encounter/encounter.service';

@Component({
    selector: 'app-entity-input',
    templateUrl: './entity-input.component.html',
    styleUrls: ['./entity-input.component.css']
})
export class EntityInputComponent implements OnInit {

    constructor(private encounterService: EncounterService) { }

    ngOnInit(): void {
    }

    add(entityName: string, entityHP: number): void {
        let newEntity: Entity = {
            name: entityName,
            initiative: 0,
            hp: entityHP
        }
        this.encounterService.add(newEntity);
    }

}
