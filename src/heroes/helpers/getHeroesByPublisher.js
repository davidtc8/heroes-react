import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];
    // Si incluye el valor de otro publisher
    if( !validPublishers.includes( publisher )) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }

    // filtra de manera manual cuando yo le mando un publisher
    return heroes.filter( heroe => heroe.publisher === publisher );

}