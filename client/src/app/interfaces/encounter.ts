import { Entity } from './entity';

export interface Encounter {
    _id: string;
    title: string;
    entities: [Entity];
}