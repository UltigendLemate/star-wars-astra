'use client'
import { useEffect, useState } from "react"
import {  columns } from "../components/columns"
import { DataTable } from "../components/data-table"
import { Entity } from "@/data/schema"

interface ApiResponse {
    results: Entity[]; 
  }


export default function DemoPage() {

const [data, setData] = useState<Entity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://swapi.dev/api/people/');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const json : ApiResponse = await response.json();
        setData(json.results); // Assuming "results" holds the data
      } catch (error : any) {
        console.error('Error fetching data:', error);
        setError(error.message ?? "Error occured");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="relative h-full min-h-screen hss w-full bg-slate-950">

    <div className="container mx-auto py-3 text-white">
        {
            isLoading ? "loading" : 
      <DataTable columns={columns} data={data} />
        }
    </div>
  
        </div>
  )
}
