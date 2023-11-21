"use client";
import { foundIDType } from "@/types";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from "@nextui-org/table";

const columns = [
	{
		key: "student_name",
		label: "STUDENT NAME",
	},
	{
		key: "student_adm",
		label: "STUDENT ADM",
	},
	{
		key: "time_found",
		label: "TIME FOUND",
	},
	{
		key: "location_found",
		label: "LOCATION FOUND",
	},
	{
		key: "date_found",
		label: "DATE FOUND",
	},
];

export default function FoundTable({ foundIDs }: { foundIDs: foundIDType[] }) {
	return (
		<Table
			aria-label="Table of found IDs"
			isCompact>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
			</TableHeader>
			<TableBody items={foundIDs}>
				{(item: foundIDType) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{getKeyValue(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}
