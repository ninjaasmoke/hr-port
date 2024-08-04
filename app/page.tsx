import WorkExp, { WorkExpProps, WorkProps } from "@/components/Work";
import Landing, { LandingProps } from "@/components/Landing";
import { ChipSectionProps } from "@/components/ui/ChipSection";

import colors from "@/utils/cn"; // edit or add colors here
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const workExpStartDate: Date = new Date("0000-01-01");

const chipSections: ChipSectionProps[] = [
  {
    title: "Languages",
    chips: [
      { name: "C++", color: colors.Cpp, textColor: "white" },
    ],
  }, {
    title: "Frontend",
    chips: [
      { name: "Flutter", color: colors.Dart, textColor: "white" },
    ],
  }, {
    title: "Backend",
    chips: [
      { name: "Firebase", color: colors.Typescript, textColor: "white" },
    ],
  },
];

const landingDate: LandingProps = {
  name: "John Doe",
  role: "Human Being",
  location: "Earth, Copernican System",
  experienceStart: workExpStartDate,
  description: "building & maintaining life.",
  chipSections: chipSections,
  links: [
    { name: "Github", url: "https://github.com/github", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/linkedin", icon: <FaLinkedin /> },
    { name: "Email", url: "mailto:email", icon: <MdOutlineAlternateEmail /> },
  ],
}

const workExp: WorkExpProps = {
  exp: [
    {
      id: "john-centre",
      link: "https://www.theejohndoe.com/",
      company: "John Research Centre",
      location: "Earth, Copernican System",
      role: "CEO",
      description: "Researching on the existence of life.",
      start: new Date("0000-01-01"),
      chips: ["Research", "Life"],
    },
  ],
  readMore: "https://www.theejohndoe.com/",
  readMoreText: "Read more",
};


export default function Home() {
  return (
    <>
      <main className="p-4 pt-12 flex flex-col max-w-3xl m-auto">

        <Landing {...landingDate} />

        <WorkExp {...workExp} />

      </main>
    </>
  );
}



{/* <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((item) => (
            <GridItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              id={item.id}
            />
          ))}
        </div> */}