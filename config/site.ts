export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Finder01",
	description: "Lost and found software for students identification cards",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Lost",
			href: "/lost",
		},
		{
			label: "Found",
			href: "/found",
		},
		{
			label: "LostAndFound",
			href: "/lost_and_found",
		},
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Lost",
			href: "/lost",
		},
		{
			label: "Found",
			href: "/found",
		},
		{
			label: "LostAndFound",
			href: "/lost_and_found",
		},
	],
};
