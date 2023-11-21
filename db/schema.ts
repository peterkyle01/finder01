import {
	mysqlTable,
	varchar,
	int,
	time,
} from "drizzle-orm/mysql-core";

export const lostId = mysqlTable("lostId", {
	id: int("id").primaryKey().autoincrement(),
	student_name: varchar("student_name", { length: 100 }),
	student_adm: int("student_adm"),
	time_lost: time("time_lost"),
	location_lost: varchar("location_lost", { length: 254 }),
	date_lost: varchar("date_lost", { length: 254 }),
});

export const foundId = mysqlTable("foundId", {
	id: int("id").primaryKey().autoincrement(),
	student_name: varchar("student_name", { length: 100 }),
	student_adm: int("student_adm"),
	time_found: time("time_found"),
	location_found: varchar("location_found", { length: 254 }),
	date_found: varchar("date_found", { length: 254 }),
});
