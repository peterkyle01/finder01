import { db } from "@/db";
import { foundId } from "@/db/schema";
import { foundIDType } from "@/types";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const foundIdJson: foundIDType = await request.json();

	await db.insert(foundId).values({
		student_name: foundIdJson.student_name,
		student_adm: foundIdJson.student_adm,
		time_found: foundIdJson.time_found,
		location_found: foundIdJson.location_found,
		date_found: foundIdJson.date_found,
		phone_number: foundIdJson.phone_number
	});

	return NextResponse.json({ message: "Created a Found ID!" });
}

export async function GET() {
	const foundIds = await db.select().from(foundId);

	return NextResponse.json(foundIds);
}

export async function PATCH(request: NextRequest) {
	const id = Number(request.nextUrl.searchParams.get("id"));
	const {
		student_name,
		student_adm,
		time_found,
		location_found,
		date_found,
		phone_number
	}: foundIDType = await request.json();

	await db
		.update(foundId)
		.set({
			student_name: student_name,
			student_adm: student_adm,
			time_found: time_found,
			location_found: location_found,
			date_found: date_found,
			phone_number: phone_number
		})
		.where(eq(foundId.id, id));
	return NextResponse.json({ message: "Updated successfully!" });
}

export async function DELETE(request: NextRequest) {
	const id = Number(request.nextUrl.searchParams.get("id"));

	await db.delete(foundId).where(eq(foundId.id, id));

	return NextResponse.json({ message: "Deleted a Found ID" });
}
