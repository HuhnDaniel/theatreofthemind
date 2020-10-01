import { Component, OnInit } from '@angular/core';

import { Entity } from '../../interfaces/entity';

import { EncounterService } from '../../services/encounter/encounter.service';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

    constructor(public encounterService: EncounterService) { }

    ngOnInit(): void {
    }

    delete(entity: Entity): void {
        console.log(entity);
    }

}
