
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FC, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Row, RowData, flexRender } from "@tanstack/react-table";
import { Entity } from "@/data/schema";
import FilmCard from "./filmCard";
import FilmCardSkeleton from "./film-card-skeleton";


interface SheetRowProps {
    row: any
}


const SheetRow: FC<SheetRowProps> = ({ row }) => {
    const entityData : Entity = row.original
    return (
        <Sheet>
            <SheetTrigger asChild>
                <TableRow>
                    {row.getVisibleCells().map((cell: any) => (
                        <TableCell key={cell.id} className="text-gray-100" >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow></SheetTrigger>
            <SheetContent side={"bottom"}>
                <SheetHeader>
                    <SheetTitle>{entityData.name}</SheetTitle>
                    <SheetDescription className="grid md:grid-cols-4 gap-5">
                        {entityData.films.map((item)=>{
                            return (
                                <FilmCard url={item} key={item}/>
                            )
                        })}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default SheetRow;