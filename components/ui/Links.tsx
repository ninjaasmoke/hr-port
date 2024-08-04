import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'

export interface Link {
    name: string;
    url: string;
    icon: React.ReactNode;
}

export interface LinksProps {
    links: Link[];
}

const Links:React.FC<LinksProps> = ({links}) => {
    return (
        <div
        >
            <h1 className="text-lg mt-4 font-heading text-slate-400"></h1>

            {links.map((link, index) => (
                <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-200 flex items-center gap-2 mb-2"
                    key={index}
                >
                    {link.icon} {link.url}
                </a>
            ))}

            
        </div>
    )
}

export default Links