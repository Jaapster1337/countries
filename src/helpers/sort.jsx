function sort(array){
    array.sort((a, b) =>
        a.population- b.population
    );
}

export default sort;