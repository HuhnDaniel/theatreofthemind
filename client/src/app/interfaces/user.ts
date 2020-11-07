import { Encounter } from './encounter';

export interface User {
    _id: string;
    email: string;
    password: string;
    encounters: [Encounter];
}