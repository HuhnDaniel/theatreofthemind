import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../interfaces/user';

import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-log-in-modal',
    templateUrl: './log-in-modal.component.html',
    styleUrls: ['./log-in-modal.component.css']
})
export class LogInModalComponent implements OnInit {
    @ViewChild('userEmail') userEmail;
    @ViewChild('userPW') userPW;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    logInRegister(email: string, password: string): void {
        email = email.trim();
        password = password.trim();

        // console.log(email, password);
        if (!email || !password) { return; }
        this.userService.logInRegister({ email, password } as User).subscribe();

        this.userEmail.nativeElement.value = '';
        this.userPW.nativeElement.value = '';
    }

}
