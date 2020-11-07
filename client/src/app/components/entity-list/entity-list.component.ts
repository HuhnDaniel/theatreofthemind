import { Component, OnInit } from '@angular/core';

import { Entity } from '../../interfaces/entity';
import { Encounter } from '../../interfaces/encounter';

import { EncounterService } from '../../services/encounter/encounter.service';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

    // Include EncounterService to display entities in the encounter
    // Also allows functions to delete one, clear the list, or roll their initiative
    constructor(
        public encounterService: EncounterService,
        private userService: UserService
    ) { }

    ngOnInit(): void {
    }

    // Function to remove a specific entity from the encounter list, based on entity._id
    delete(entity: Entity): void {
        this.encounterService.deleteEntity(entity);
    }

    saveEncounter(encounterName: string): void {
        // console.log(encounterName);
        // console.log(this.encounterService.entities, this.userService.user);
        this.userService.addEncounter({ title: encounterName, entities: this.encounterService.entities } as Encounter).subscribe();
    }

}
