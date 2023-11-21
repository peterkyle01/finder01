import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h2 className={subtitle()}>Welcome to </h2>
				<h1 className={title({ color: "violet"})}>Finder01&nbsp;</h1>
				<h2 className={subtitle()}>
					This software helps you to locate your lost student ID card or report
					a found one. You can also contact the nearest campus security office
					if you need assistance. To use this software, please sign up or sign
					in.Thank you for using our service.
				</h2>
			</div>
		</section>
	);
}
