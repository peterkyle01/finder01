"use client";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/modal";
import { ArrowDown01, Lock, MailIcon, MapPin, User } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { foundIDType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function AddFound() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [formData, setFormData] = useState<foundIDType>({
		student_name: "",
		student_adm: 0,
		time_found: "",
		location_found: "",
		date_found: "",
	});

	const { mutate } = useMutation({
		mutationKey: ["createFoundID"],
		mutationFn: async (data: foundIDType) => {
			await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/found`, { ...data });
		},
		onSuccess: () => {
			toast.success("Found ID created successfully!");
		},
		onError: () => {
			toast.error("An Error occured while creating the found ID!");
		},
	});

	return (
		<>
			<Button
				onPress={onOpen}
				color="primary">
				Add Found ID
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
								Add Found ID
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
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
									type="time"
									variant="bordered"
									onChange={(e) =>
										setFormData({ ...formData, time_found: e.target.value })
									}
								/>
								<Input
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
									type="date"
									variant="bordered"
									onChange={(e) =>
										setFormData({
											...formData,
											date_found: e.target.value,
										})
									}
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
									onClick={() => mutate(formData)}>
									Submit
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
