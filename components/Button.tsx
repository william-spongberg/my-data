
interface ButtonProps {
  href: string;
  name: string;
}

export default function Button({ href, name }: ButtonProps) {
  return (
    <button class="flex items-center justify-center bg-white rounded-2xl p-4 my-2 hover:bg-yellow-500 hover:text-white">
      <a
        href={href}
        class="text-light-blue-500"
      >
        {name}
      </a>
    </button>
  );
}