"use client";

import { lostIDType } from "@/types";
import { Button } from "@nextui-org/button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
	X,
	Pen,
	User,
	ArrowDown01,
	Timer,
	MapPin,
	Calendar,
	Phone,
} from "lucide-react";
import { toast } from "sonner";
import EditLost from "./EditLost";

export default function EditLostPage() {
	const queryClient = useQueryClient();
	const { data: lostIDs } = useQuery({
		queryKey: ["getEditLostID"],
		queryFn: async (): Promise<lostIDType[]> => {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_API_URL}/lost`
			);

			return data;
		},
	});

	const { mutate } = useMutation({
		mutationKey: ["deleteLostID"],
		mutationFn: async (id: number) => {
			await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/lost?id=${id}`);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getEditLostID"] });
			toast.success("Deleted successfully!");
		},
		onError: () => {
			toast.error("An error occures while deleting!");
		},
	});

	return (
		<div className="w-full h-full grid grid-cols-2 gap-2 sm:grid-cols-8">
			{lostIDs &&
				lostIDs.map((lostID) => (
					<div
						className="bg-primary w-full h-48 rounded-md p-2 font-serif font-bold"
						key={lostID.id}>
						<h1 className="flex justify-start items-center gap-2">
							<User
								color="white"
								size={15}
							/>
							<p className="">{lostID.student_name}</p>
						</h1>
						<h2 className="flex justify-start items-center gap-2">
							<ArrowDown01
								color="white"
								size={15}
							/>
							{lostID.student_adm}
						</h2>
						<p className="flex justify-start items-center gap-2">
							<Timer
								color="white"
								size={15}
							/>
							{lostID.time_lost}
						</p>
						<p className="flex justify-start items-center gap-2">
							<MapPin
								color="white"
								size={15}
							/>
							{lostID.location_lost}
						</p>
						<p className="flex justify-start items-center gap-2">
							<Calendar
								color="white"
								size={15}
							/>
							{lostID.date_lost}
						</p>
						<p className="flex justify-start items-center gap-2">
							<Phone
								color="white"
								size={15}
							/>
							{lostID.phone_number}
						</p>
						<div className="flex gap-2 my-2">
							<EditLost id={lostID.id!} />
							<Button
								size="sm"
								color="danger"
								onClick={() => mutate(lostID.id!)}>
								<X size={15} />
							</Button>
						</div>
					</div>
				))}
		</div>
	);
}
