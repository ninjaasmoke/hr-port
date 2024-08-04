import Links, { Link } from "@/components/ui/Links";
import BottomBar from "@/components/ui/BottomBar";
import Image from "next/image";

import ChipSection, { ChipSectionProps } from "./ui/ChipSection";
import { calculateExperience } from "@/utils/dates";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface LandingProps {
    name: string;
    role: string;
    location: string;
    experienceStart: Date;
    description: string;
    chipSections: ChipSectionProps[];
    links: Link[];
    image?: string | StaticImport;
}

function Landing({ name, role, location, experienceStart, description, chipSections, links, image }: LandingProps) {
    const experience = calculateExperience(experienceStart);
    return (
        <div className="h-screen flex justify-between items-center pb-12 gap-12">
            <div>
                <h1 className="text-xl font-heading text-slate-400">{name}, a</h1>
                <p className="lowercase mt-2">
                    <span className="rainbowText text-4xl">{role}</span> in
                    <br />
                    <span className="fixedColorText">{location}</span> with
                    <br />
                    <span className="fixedColorText">{experience.years} years</span>, {experience.months} months & {experience.days} days of experience
                    <br />
                    {description}
                </p>
                <Links links={links} />
                <div>
                    {chipSections.map((section, index) => (
                        <ChipSection key={index} {...section} />
                    ))}
                </div>
            </div>
            {image && <Image
                src={image}
                alt="john"
                className="h-64 w-64 overflow-hidden hidden sm:block"
                style={{
                    zIndex: 0
                }}
            />}
            <BottomBar />
        </div>
    );
}

export default Landing;
