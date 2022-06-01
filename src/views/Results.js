import { useParams } from "react-router-dom";
import { useFetchMoviesQuery } from "../redux/movies";
import Loading from './Loading';

const Results = () => {

  const {title} = useParams();
  const{ data, error, isLoading , isFetching} = useFetchMoviesQuery(title);

  return (
    <div className="flex flex-row w-full">
      {isLoading && isFetching && <Loading/>}

    </div>
  )
}

export default Results