export interface ChipProps {
    name: string,
    color: string,
    textColor: string
};

function Chip({ name, color, textColor }: ChipProps) {
    return (
        <span
            className={`py-1 px-2 rounded-full text-xs font-bold uppercase`}
            style={{ backgroundColor: color, color: textColor }}
        >
            {name}
        </span>
    )
}

export default Chip