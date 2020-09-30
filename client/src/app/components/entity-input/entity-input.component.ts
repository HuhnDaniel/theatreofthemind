import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-entity-input',
    templateUrl: './entity-input.component.html',
    styleUrls: ['./entity-input.component.css']
})
export class EntityInputComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    add(name: string, hp: number): void {
        console.log(name, hp);
    }

}
