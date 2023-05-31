import { Transport } from "./transport.model";

export interface Flight{
    Transport: Transport;
    Origin: string;
    Destination: string;
    Price: number;
}