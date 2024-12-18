import { Document } from 'mongoose';

export interface IStudent extends Document{
    readonly nombre: string;
    readonly genero: string;
    readonly clase: number;
    readonly nota: number;
}