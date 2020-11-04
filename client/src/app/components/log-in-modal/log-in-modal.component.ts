import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
    closeResult = '';

    constructor(
        private userService: UserService,
        private modalService: NgbModal
    ) { }

    ngOnInit(): void {
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'log-in-register' }).result.then((result) => {
            this.closeResult = `Closed with ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    logInRegister(email: string, password: string): void {
        email = email.trim();
        password = password.trim();

        // console.log(email, password);
        if (!email || !password) { return; }
        this.userService.logInRegister({ email, password } as User).subscribe();

        this.modalService.dismissAll();
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with ${reason}`;
        }
    }
}
