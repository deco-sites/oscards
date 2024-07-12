CREATE TABLE `profiles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`image` text,
	`role` text,
	`score` integer,
	`xUrl` integer,
	`linkedInUrl` integer,
	`gitHubUrl` integer
);
