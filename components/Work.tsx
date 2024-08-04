import { RiExternalLinkFill } from 'react-icons/ri';

export interface WorkProps {
    company: string;
    role: string;
    link?: string;
    description: string;
    location: string;
    id: string
    start: Date;
    end?: Date;
    chips: string[];
};

const Work: React.FC<WorkProps> = (
    { company, role, description, link, location, start, end, chips, id }
) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className='mb-6'>
                <h1 className="text-lg mt-4 font-heading rainbowText"
                    style={{
                        fontSize: "1rem",
                        padding: 0,
                    }}
                >{company}</h1>
                <div className='flex gap-2'>
                    <h2 className="text-md font-heading text-slate-300">{role}</h2> | <h2 className="text-md font-heading text-slate-400">{location}</h2>
                </div>
                <div>
                    <h2 className="text-slate-400">{start.toDateString()} - {end ? end.toDateString() : "Present"}</h2>
                </div>
                <div className="py-2">
                    <p className="text-slate-400">{description}</p>
                </div>
                <div>
                    <div className="flex flex-wrap gap-2">
                        {chips.map((chip, index) => (
                            <span key={index} className="py-1 px-2 rounded-full text-xs font-bold uppercase"
                                style={{ backgroundColor: "rgb(30 41 59)", color: "rgb(248 250 252)", whiteSpace: "nowrap" }}
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}

export interface WorkExpProps {
    exp: WorkProps[];
    readMore?: string;
    readMoreText?: string;
}

const WorkExp: React.FC<WorkExpProps> = ({ exp, readMore, readMoreText }) => {
    return (
        <div className='h-screen py-16'>
            <div className="mt-4 w-full h-[1px] bg-gray-800 rainbowBackground" />
            <h1 className="text-lg mt-4 font-heading text-slate-400">Work</h1>
            
            {exp.map((item, index) => (
                <Work key={index} {...item} />
            ))}

            {
                readMore && (
                    <div className='flex gap-1 items-center'>
                        View all on <a href={readMore} target="_blank" rel="noopener noreferrer" className="hover:text-red-300 text-slate-200 flex items-center justify-center gap-1">
                            {readMoreText} <RiExternalLinkFill className='pb-[1px]' />
                        </a>
                    </div>
                )
            }
            <div className="mt-4 w-full h-[1px] bg-gray-800 rainbowBackground" />
        </div>
    )
}

export default WorkExp