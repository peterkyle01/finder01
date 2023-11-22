"use client";
import { Send } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	function handleSubmit() {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setName("");
			setEmail("");
			setMessage("");
			toast.success("Message sent successfully!");
		}, 1500);
	}

	return (
		<div className="w-full h-auto p-2">
			<Card className="w-full sm:w-1/2">
				<CardHeader>
					<CardHeader>Contact The Administration</CardHeader>
				</CardHeader>
				<CardBody>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<label htmlFor="name">Student Name</label>
								<Input
									id="name"
									placeholder="Langat..."
									value={name}
									//@ts-ignore
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<label htmlFor="Student Adm">Student Adm</label>
								<Input
									id="Student Adm"
									placeholder="10244..."
									value={email}
									//@ts-ignore
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<label htmlFor="name">Message</label>
								<textarea
									className="border-none rounded-md p-2 placeholder:text-sm placeholder:text-gray-300"
									rows={5}
									id="message"
									placeholder="my id has been tampered with ..."
									value={message}
									//@ts-ignore
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
						</div>
					</form>
				</CardBody>
				<CardFooter className="flex justify-end">
					<Button onClick={handleSubmit}>
						{loading && <div>Sending...</div>}
						{!loading && (
							<div className="flex justify-between items-center">
								Send
								<Send
									size={13}
									className="ml-2"
								/>
							</div>
						)}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
