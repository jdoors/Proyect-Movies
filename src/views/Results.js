import { useParams } from "react-router-dom";
import { useFetchMoviesQuery } from "../redux/movies";
import Loading from './Loading';
import List from "./List";


const Results = () => {

  const { book } = useParams();
  const { data, error, isLoading, isFetching } = useFetchMoviesQuery(book);
 console.log(data)
  return (
    <div className="flex flex-row w-full">
      {isLoading && isFetching ? <Loading /> : <List data={book} />}
    </div>
  )
}

export default Results