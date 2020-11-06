import { Entity } from './entity';

export interface Encounter {
    _id: number;
    title: string;
    entities: [Entity];
}