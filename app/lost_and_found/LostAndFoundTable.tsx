"use client";
import { lostIDType } from "@/types";
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
		key: "time_lost",
		label: "TIME LOST",
	},
	{
		key: "location_lost",
		label: "LOCATION LOST",
	},
	{
		key: "date_lost",
		label: "DATE LOST",
	},
];

export default function LostAndFoundTable({ lostIDs }: { lostIDs: lostIDType[] }) {
	return (
		<Table
			aria-label="Table of lost and found IDs"
			isCompact>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
			</TableHeader>
			<TableBody items={lostIDs}>
				{(item: lostIDType) => (
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
