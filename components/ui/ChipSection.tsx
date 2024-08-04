import Chip, { ChipProps } from "@/components/ui/Chip";

export interface ChipSectionProps {
    title: string;
    chips: ChipProps[];
}

const ChipSection: React.FC<ChipSectionProps> = ({ title, chips }) => {
    return (
        <div>
            <h1 className="text-lg mt-4 font-heading text-slate-400">{title}</h1>
            <div className="flex flex-wrap gap-2">
                {chips.map((chip) => (
                    <Chip key={chip.name} name={chip.name} color={chip.color} textColor={chip.textColor} />
                ))}
            </div>
        </div>
    );
};

export default ChipSection;