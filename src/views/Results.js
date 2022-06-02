import { useParams } from "react-router-dom";
import { useFetchMoviesQuery } from "../redux/movies";
import Loading from './Loading';
import List from "./List";

const Results = () => {

  const { title } = useParams();
  const { data, error, isLoading, isFetching } = useFetchMoviesQuery(title);
 console.log(data)
  return (
    <div className="flex flex-row w-full">
      {isLoading && isFetching ? <Loading /> : <List data={data} />}
    </div>
  )
}

export default Results