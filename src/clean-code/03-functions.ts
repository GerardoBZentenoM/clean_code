(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsBymovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBio( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'gerardo' ) return false;

        console.log('Crear actor');
        return true;        

    }

      const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if ( isDead ) {
            return 1500;
        } 
        
        if ( isSeparated ) {
                return 2500;
            } 
        
        return ( isRetired ) ? 3000 : 4000;
        
        
    }


})();
