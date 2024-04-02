import { Film } from "@/data/schema";
import { FC, useEffect, useState } from "react";
import FilmCardSkeleton from "./film-card-skeleton";

interface filmCardProps {
    url : string
}
 
const FilmCard: FC<filmCardProps> = ({url}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);

    const [data, setData] = useState<Film|null>(null);
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          setError(null);
    
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Error fetching data: ${response.statusText}`);
            }
            const json : Film = await response.json();
            setData(json);
            console.log(json)
          } catch (error : any) {
            console.error('Error fetching data:', error);
            setError(error.message ?? "Error occured");
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);

      if (isLoading || !data || error) return <FilmCardSkeleton/>
    return ( 
    <div className="rounded-md border-dashed border border-primary p-4 space-y-2">
        <div className="flex justify-between gap-2 items-center">
        <h4 className="text-lg text-black font-medium">{data.title}</h4>
        <p className="text-xs bg-accent p-1">{data.release_date}</p>
        </div>
        <p className="line-clamp-2">{data.opening_crawl}</p>

        <div className="">
            <h4><span className="text-primary font-medium">Director:</span> {data.director}</h4>
            <h4><span className="text-primary font-medium">Producer:</span> {data.producer}</h4>
        </div>

    </div>
     );
}
 
export default FilmCard;