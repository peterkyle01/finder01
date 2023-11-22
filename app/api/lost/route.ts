import { db } from "@/db";
import { lostId } from "@/db/schema";
import { lostIDType } from "@/types";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const lostIDJson: lostIDType = await request.json();

	await db.insert(lostId).values({
		student_name: lostIDJson.student_name,
		student_adm: lostIDJson.student_adm,
		time_lost: lostIDJson.time_lost,
		location_lost: lostIDJson.location_lost,
		date_lost: lostIDJson.date_lost,
		phone_number:lostIDJson.phone_number
	});

	return NextResponse.json({ message: "Created a Lost ID!" });
}

export async function GET() {
	const lostIDs = await db.select().from(lostId);

	return NextResponse.json(lostIDs);
}

export async function PATCH(request: NextRequest) {
	const id = Number(request.nextUrl.searchParams.get("id"));
	const {
		student_name,
		student_adm,
		time_lost,
		location_lost,
		date_lost,
		phone_number
	}: lostIDType = await request.json();

	await db
		.update(lostId)
		.set({
			student_name: student_name,
			student_adm: student_adm,
			time_lost: time_lost,
			location_lost: location_lost,
			date_lost: date_lost,
			phone_number:phone_number
		})
		.where(eq(lostId.id, id));
	return NextResponse.json({ message: "Updated successfully!" });
}

export async function DELETE(request: NextRequest) {
	const id = Number(request.nextUrl.searchParams.get("id"));

	await db.delete(lostId).where(eq(lostId.id, id));

	return NextResponse.json({ message: "Deleted a Lost ID" });
}
