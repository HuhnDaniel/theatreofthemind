import { Component, OnInit } from '@angular/core';

import { User } from '../../interfaces/user';

import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-log-in-modal',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.css']
})
export class LogInModalComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    logInRegister(email: string, password: string): void {
        email = email.trim();
        password = password.trim();

        // console.log(email, password);
        if (!email || !password) { return; }
        this.userService.logInRegister({ email, password } as User).subscribe();
        this.userService.getUser();
    }

}
