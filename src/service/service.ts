import { sightings2022, sightings2021, sightings2020 } from "../data";

const sightings22 = sightings2022;
const sightings21 = sightings2021;
const sightings20 = sightings2020;

export const getSightings = ( year: number ): Sighting[] => {
    let annualSightings;

    switch ( year ){
        case 2022:
            annualSightings = sightings22;
            break;
        case 2021:
            annualSightings = sightings21;
            break;
        case 2020:
            annualSightings = sightings20;
            break;
    }

    return annualSightings.map(( sighting ) => {
        return {
            id: sighting.id,
            family: sighting.family,
            species: sighting.species,
            location: sighting.location,
            datetime: new Date(sighting.datetime),
            quantity: sighting.quantity,
        }
    })
}

export const getUniqueTotalOf = (
    year: number,
    prop: keyof Sighting
): number => {
    const sightings = getSightings( year );
    let coll = [];

    for( let i = 0; i < sightings.length; i++ ){
        coll.push(sightings[i][prop]);
    }

    return [...new Set(coll)].length;
}

export const getTotalSightings = (
    year: number
): number => {
    return getSightings( year ).length;
}

export const getMostActiveMonth = (
    year: number
) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const sightings = getSightings( year );
    let coll = [];

    for( let i = 0; i < sightings.length; i++ ){
        coll.push(sightings[i].datetime.getMonth());
    }

    return months[getMostFrequentItemInArray( coll )];
}

const getMostFrequentItemInArray = ( array: number[] ) => {
    let maxCount = 0;
    let result;

    for (let i = 0; i < array.length; i++) {
        let count = 0;

        for (let ii = 0; ii < array.length; ii++) {
            if (array[i] === array[ii])
                count++;
        }

        if (count > maxCount) {
            maxCount = count;
            result = array[i];
        }
    }

    return result;
}

export const formatDate = ( datetime: Date ) => new Intl.DateTimeFormat('en-NZ',{
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
}).format( datetime );

type Sighting = {
    id: string,
    family: string,
    species: string,
    location: string,
    datetime: Date,
    quantity?: string,
}
