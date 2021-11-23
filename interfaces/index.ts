// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Resource } from 'path/to/interfaces';

export type Species = {
    id: number;
    taxon: string;
    observationsCount: number;
    image: string;
};
