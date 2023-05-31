import { Flight } from "./flight.model";

export interface Journey{
    Origin: string;
    Destination: string;
    Price: number;
    Flights: Flight[];
    TypeTrip: number;
}