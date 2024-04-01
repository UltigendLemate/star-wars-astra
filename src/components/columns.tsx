"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Entity } from "@/data/schema"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { cn } from "@/lib/utils"
import { genders } from "@/components/data-table-toolbar"

// export type asdf = {
//     name: string;
//     height: string;
//     mass: string;
//     hair_color: string;
//     skin_color: string;
//     eye_color: string;
//     birth_year: string;
//     gender: string;
//     homeworld: string;
//     films: string[];
//     species: string[];
//     vehicles: string[];
//     starships: string[];
//     created: string;
//     edited: string;
//     url}name, height, mass, gender and hair_color

export const columns: ColumnDef<Entity>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    enableSorting: true,
    
  },
  {
    accessorKey: "height",
    enableSorting: true,
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Height" />
      ),
  },
  {
    accessorKey: "mass",
    enableSorting: false,
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Mass" />
      ),
  },
  {
    accessorKey: "gender",
    enableSorting: false,
    
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Gender" />
      ),
    cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className={cn(row.getValue("gender") == "male" ? "text-yellow-100" : row.getValue("gender")=="female"? "text-pink-100" : "text-white")}>
              {row.getValue("gender")}
            </span>
          </div>
        )
      },
    filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
  },
  {
    accessorKey: "hair_color",
    enableSorting: false,
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Hair Color" />
      ),
  },
]
