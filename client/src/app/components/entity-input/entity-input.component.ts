import { Component, OnInit, ViewChild } from '@angular/core';

import { Entity } from '../../interfaces/entity';

import { EncounterService } from '../../services/encounter/encounter.service';

@Component({
    selector: 'app-entity-input',
    templateUrl: './entity-input.component.html',
    styleUrls: ['./entity-input.component.css']
})
export class EntityInputComponent implements OnInit {
    @ViewChild('entityName') entityName;
    @ViewChild('entityHP') entityHP;
    @ViewChild('initiativeModifier') initiativeModifier;

    constructor(private encounterService: EncounterService) { }

    ngOnInit(): void {
    }

    add(name: string, hp: number, initiativeMod: number): void {
        name = name.trim();
        console.log(typeof hp);

        if (!name || !hp) { 
            return;
        }
        if (!initiativeMod) {
            initiativeMod = 0;
        }

        this.encounterService.addEntity({ name, hp, initiativeMod } as Entity);

        this.entityName.nativeElement.value = '';
        this.entityHP.nativeElement.value = '';
        this.initiativeModifier.nativeElement.value = '';
    }

}
