import { Component, OnInit, ViewChild } from '@angular/core';

import { Entity } from '../../interfaces/entity';

import { EncounterService } from '../../services/encounter/encounter.service';

@Component({
    selector: 'app-entity-input',
    templateUrl: './entity-input.component.html',
    styleUrls: ['./entity-input.component.css']
})
export class EntityInputComponent implements OnInit {
    // Track input fields to be cleared after an entity is added to the encounter list
    @ViewChild('entityName') entityName;
    @ViewChild('entityHP') entityHP;
    @ViewChild('initiativeModifier') initiativeModifier;

    // Include EncounterService to add entities to encounter list, so they can be displayed elsewhere
    constructor(private encounterService: EncounterService) { }

    ngOnInit(): void {
    }

    // Function to determine stats to include in a new entity, if sufficient stats have been provided by user
    // If valid, send to encounterService to be added to encounter list, then clear inputs
    add(name: string, hp: number, initiativeMod: number): void {
        name = name.trim();

        if (!name || !hp) {
            return;
        }
        if (!initiativeMod) {
            initiativeMod = 0;
        }

        hp = Number(hp);
        initiativeMod = Number(initiativeMod);

        this.encounterService.addEntity({ name, hp, initiativeMod } as Entity);

        this.entityName.nativeElement.value = '';
        this.entityHP.nativeElement.value = '';
        this.initiativeModifier.nativeElement.value = '';
    }

}
