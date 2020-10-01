// Template for Entity object, represents all objects that will be included in an encounter
// i.e. players, NPCs, monsters, and environmental effects
export interface Entity {
    _id: number;
    name: string;
    initiative: number | undefined;
    initiativeMod: number;
    hp: number;
}