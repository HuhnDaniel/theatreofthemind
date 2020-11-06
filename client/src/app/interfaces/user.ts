import { Encounter } from './encounter';

export interface User {
    _id: number;
    email: string;
    password: string;
    encounters: [Encounter];
}