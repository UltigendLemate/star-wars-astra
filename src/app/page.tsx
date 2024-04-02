'use client'
import { useEffect, useState } from "react"
import { columns } from "../components/columns"
import { DataTable } from "../components/data-table"
import { Entity } from "@/data/schema"
import { Loader2Icon } from "lucide-react"

interface ApiResponse {
  results: Entity[];
}


export default function Page() {

  const [data, setData] = useState<Entity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    const fetchAllPages = async () => {
      setIsLoading(true);
      setError(null);
      setData([]); 
      let dataTemp: Entity[] = [];
      for (let page = 1; page <= 8; page++) {
        try {
          const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
          if (!response.ok) {
            throw new Error(`Error fetching data from page ${page}: ${response.statusText}`);
          }
          const json: ApiResponse = await response.json();
          dataTemp = [...dataTemp, ...json.results];
          // setData((data) => [...data, ...json.results]);
        } catch (error) {
          console.error('Error fetching data from page', page, ':', error);
          setError(`Error fetching data from page ${page}. Please try again.`);
          break; 
        }
      }
      setData(dataTemp);
  
      setIsLoading(false);
    };
  
    fetchAllPages();
  }, []);


  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative h-full min-h-screen w-full">

        <div className="container mx-auto py-3 text-white">
          {
            isLoading || error ? <div className="w-full h-[95vh] flex justify-center items-center"><Loader2Icon className="animate-spin w-14 h-14" /></div> :
              <DataTable columns={columns} data={data} />
          }
        </div>
      </div>
    </div>
  )
}
