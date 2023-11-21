import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function Home() {
	return (
		<section className="flex flex-col items-start justify-center gap-4 py-8 md:pl-24 md:py-10">
			<div className="inline-block max-w-lg text-start justify-center">
				<h1 className={title()}>
					Lost &<br />
				</h1>
				<h1 className={title({ color: "violet" })}>Found Student<br/></h1>
				<h1 className={title()}>
					Id<br />
				</h1>
				<h2 className="text-md sm:text-lg my-8">
					This software helps you to locate your lost student ID card or report
					a found one. You can also contact the nearest campus security office
					if you need assistance. To use this software, please sign up or sign
					in.Thank you for using our service.
				</h2>
				<Button as={Link} href="/lost" color="primary">Start Now</Button>
			</div>
		</section>
	);
}
