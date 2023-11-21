import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { Facebook, Twitter } from "lucide-react";
import { UserButton, currentUser } from "@clerk/nextjs";

export const Navbar = async () => {
	const user = await currentUser();

	const adminEmail = "susanoyole1234@gmail.com";

	return (
		<NextUINavbar
			
			maxWidth="xl">
			<NavbarContent
				className="basis-1/5 sm:basis-full"
				justify="start">
				<NavbarBrand
					as="li"
					className="gap-3 max-w-fit">
					<NextLink
						className="flex justify-start items-center gap-1"
						href="/">
						<p className="font-bold text-inherit font-agbalumo">FINDER01</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
					<NavbarItem>
						{user?.emailAddresses[0].emailAddress == adminEmail && (
							<NextLink
								color="success"
								href="/admin">
								Admin
							</NextLink>
						)}
					</NavbarItem>
				</ul>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end">
				<NavbarItem className="hidden sm:flex">
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					{user ? (
						<UserButton afterSignOutUrl="/" />
					) : (
						<div className="flex gap-2">
							<Button
								size="sm"
								as={Link}
								className="text-sm font-normal text-default-600 bg-default-100"
								href={"/sign-up"}
								variant="flat">
								SignUp
							</Button>
							<Button
								size="sm"
								as={Link}
								className="text-sm font-normal text-default-600 bg-default-100 bg-primary"
								href={"/sign-in"}
								variant="flat">
								LogIn
							</Button>
						</div>
					)}
				</NavbarItem>
			</NavbarContent>
			<NavbarContent
				className="sm:hidden basis-1 pl-4"
				justify="end">
				<ThemeSwitch />
				<NavbarMenuItem>
					<UserButton afterSignOutUrl="/" />
				</NavbarMenuItem>
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu >
				<div className="flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href={item.href}
								size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
				<NavbarMenuItem>
					{user?.emailAddresses[0].emailAddress == adminEmail && (
						<NextLink
							color="success"
							href="/admin">
							Admin
						</NextLink>
					)}
				</NavbarMenuItem>
				<NavbarMenuItem className="flex gap-2">
					{!user && (
						<>
							<Button
								size="sm"
								as={Link}
								className="text-sm font-normal text-default-600 bg-default-100"
								href={"sign-up"}
								variant="flat">
								SignUp
							</Button>
							<Button
								size="sm"
								as={Link}
								className="text-sm font-normal text-default-600 bg-default-100 bg-primary"
								href={"/sign-in"}
								variant="flat">
								LogIn
							</Button>
						</>
					)}
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
	);
};
