CREATE TABLE `members` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`imageUrl` text,
	`role` text,
	`score` integer,
	`xUrl` integer,
	`linkedInUrl` integer,
	`gitHubUrl` integer
);
