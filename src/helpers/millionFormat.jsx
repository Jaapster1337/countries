export function millionFormat(population){
    const formattedPopulation = Math.round(population/1000000).toString()+" million"
    return formattedPopulation
}