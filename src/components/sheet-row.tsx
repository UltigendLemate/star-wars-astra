
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


interface SheetRowProps {
    row: any
}


const SheetRow: FC<SheetRowProps> = ({ row }) => {

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
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        Thasdfnnot be undone. This will permanently delete your account
                        anasdf
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default SheetRow;