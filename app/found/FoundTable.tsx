"use client";
import { useFoundIDsData } from "@/hooks/useFoundIDsData";
import { useSearchValue } from "@/hooks/useSearch";
import { foundIDType } from "@/types";
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

export default function FoundTable() {
	const { value, setValue } = useSearchValue();
	const {
		filteredFoundIDs,
		stateFoundIDs,
		setStateFoundIDs,
		setFilteredFoundIDs,
	} = useFoundIDsData();
	useQuery({
		queryKey: ["getFoundIDs"],
		queryFn: async (): Promise<foundIDType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/found`
			);
			setStateFoundIDs(data);
			return data;
		},
	});

	let { contains } = useFilter({
		sensitivity: "base",
	});

	useEffect(() => {
		let matchedFoundIDs = stateFoundIDs.filter((stateFoundID) =>
			contains(stateFoundID.student_name, value)
		);
		setFilteredFoundIDs(matchedFoundIDs!);
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
					aria-label="Table of found IDs"
					isCompact>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody items={filteredFoundIDs}>
						{(item: foundIDType) => (
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
					aria-label="Table of found IDs"
					isCompact>
					<TableHeader columns={columns}>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>
					<TableBody items={stateFoundIDs}>
						{(item: foundIDType) => (
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
