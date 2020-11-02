import { Component, OnInit } from '@angular/core';

// import { User } from '../../interfaces/user';

import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

    constructor(public userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUser();
    }

    logOut(): void {
        this.userService.logOut().subscribe();
    }

}
