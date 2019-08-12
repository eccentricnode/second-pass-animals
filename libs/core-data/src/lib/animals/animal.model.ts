export interface Animal {
    id: string;
    name: string;
    height: string;
    mass: number;
    continent: string;
}

export const emptyAnimal: Animal = {
    id: null,
    name: '',
    height: '',
    mass: null,
    continent: '',
}