import Pagination from "components/Pagination";
import MovieStars from "components/MovieStars";
import MovieScore from "components/MovieScore";

function Listing() {
    return (
        <div><Pagination />
            <MovieScore />
            <MovieStars /></div>

    );
}

export default Listing;