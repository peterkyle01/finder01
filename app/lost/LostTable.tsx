"use client";
import { useLostIDsData } from "@/hooks/useLostIDsData";
import { useSearchValue } from "@/hooks/useSearch";
import { lostIDType } from "@/types";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from "@nextui-org/table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect } from "react";
import { useFilter } from "react-aria";

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

export default function LostTable() {
	const { value, setValue } = useSearchValue();
	const { filteredLostIDs, stateLostIDs, setStateLostIDs, setFilteredLostIDs } =
		useLostIDsData();
	useQuery({
		queryKey: ["getLostIDs"],
		queryFn: async (): Promise<lostIDType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/lost`
			);
			setStateLostIDs(data);
			return data;
		},
	});

	let { contains } = useFilter({
		sensitivity: "base",
	});

	useEffect(() => {
		let matchedLostIDs = stateLostIDs.filter((stateLostID) =>
			contains(stateLostID.student_name, value)
		);
		setFilteredLostIDs(matchedLostIDs!);
	}, [value]);

	return (
		<>
			<Input
				className="md:w-1/2 my-2"
				aria-label="Search"
				classNames={{
					inputWrapper: "bg-default-100",
					input: "text-sm",
				}}
				endContent={
					<Kbd
						className="hidden lg:inline-block"
						keys={["command"]}>
						K
					</Kbd>
				}
				labelPlacement="outside"
				placeholder="Student name..."
				startContent={<Search size={18} />}
				type="search"
				//@ts-ignore
				onChange={(e) => setValue(e.target.value)}
			/>
			{value.length > 0 ? (
				<Table
					aria-label="Table of lost IDs"
					isCompact>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody items={filteredLostIDs}>
						{(item: lostIDType) => (
							<TableRow key={item.id}>
								{(columnKey) => (
									<TableCell>{getKeyValue(item, columnKey)}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			) : (
				<Table
					aria-label="Table of lost IDs"
					isCompact>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody items={stateLostIDs}>
						{(item: lostIDType) => (
							<TableRow key={item.id}>
								{(columnKey) => (
									<TableCell>{getKeyValue(item, columnKey)}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			)}
		</>
	);
}
