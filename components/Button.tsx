

interface ButtonProps {
  href: string;
  name: string;
  textColour?: string;
  backgroundColour?: string;
  hoverBackgroundColour?: string;
  hoverTextColour?: string;
}

export default function Button({
  href,
  name,
  backgroundColour = 'bg-white',
  textColour = 'text-light-blue-500',
  hoverBackgroundColour = 'hover:bg-yellow-500',
  hoverTextColour = 'hover:text-white'
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center ${backgroundColour} rounded-2xl p-4 my-2 ${hoverBackgroundColour} ${hoverTextColour}`}
    >
      <a
        href={href}
        className={`${textColour}`}
      >
        {name}
      </a>
    </button>
  );
}