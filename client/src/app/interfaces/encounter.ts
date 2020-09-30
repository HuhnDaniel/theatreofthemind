import { Entity } from './entity';

export interface Encounter {
    title: string;
    createdBy: string;
    entities: [Entity];
}