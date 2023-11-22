"use client";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { ArrowDown01, MapPin, Pen, Phone, User } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { foundIDType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function EditFound({ id }: { id: number }) {
	const queryClient = useQueryClient();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [formData, setFormData] = useState<foundIDType>({
		student_name: "",
		student_adm: 0,
		time_found: "",
		location_found: "",
		date_found: "",
		phone_number: 0,
	});

	const { mutate } = useMutation({
		mutationKey: ["updateFoundID"],
		mutationFn: async () => {
			await axios.patch(
				`${process.env.NEXT_PUBLIC_API_URL}/found?id=${id}`,
				formData
			);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getEditFoundID"] });
			toast.success("Found ID updated successfully!");
		},
		onError: () => {
			toast.error("An Error occured while updating the found ID!");
		},
	});

	return (
		<>
			<Button
				onPress={onOpen}
				color="warning"
				size="sm">
				<Pen size={15} />
			</Button>
			<Modal
				size="xs"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="top-center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								Edit Found ID
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									value={formData.student_name}
									endContent={
										<User
											color="white"
											size={20}
										/>
									}
									onChange={(e) =>
										setFormData({ ...formData, student_name: e.target.value })
									}
									label="Student Name"
									placeholder="Langat..."
									variant="bordered"
								/>
								<Input
									value={String(formData.student_adm)}
									endContent={
										<ArrowDown01
											color="white"
											size={20}
										/>
									}
									onChange={(e) =>
										setFormData({
											...formData,
											student_adm: Number(e.target.value),
										})
									}
									label="Student Admission"
									placeholder="10244"
									variant="bordered"
								/>
								<Input
									value={formData.time_found}
									type="time"
									variant="bordered"
									onChange={(e) =>
										setFormData({ ...formData, time_found: e.target.value })
									}
								/>
								<Input
									value={formData.location_found}
									endContent={
										<MapPin
											color="white"
											size={20}
										/>
									}
									onChange={(e) =>
										setFormData({ ...formData, location_found: e.target.value })
									}
									label="Location Lost"
									placeholder="Cafeteria..."
									variant="bordered"
								/>
								<Input
									value={formData.date_found}
									type="date"
									variant="bordered"
									onChange={(e) =>
										setFormData({
											...formData,
											date_found: e.target.value,
										})
									}
								/>
								<Input
									endContent={
										<Phone
											color="white"
											size={17}
										/>
									}
									onChange={(e) =>
										setFormData({
											...formData,
											phone_number: Number(e.target.value),
										})
									}
									label="Phone Number"
									placeholder="0712345678"
									variant="bordered"
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="flat"
									onPress={onClose}>
									Close
								</Button>
								<Button
									color="primary"
									onPress={onClose}
									onClick={() => mutate()}>
									Edit
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
