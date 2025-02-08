
interface ButtonProps {
  href: string;
}

export default function Button({ href }: ButtonProps) {
  return (
    <button class="flex items-center justify-center bg-white rounded-2xl p-4 hover:bg-yellow-500 hover:text-white">
      <a
        href={href}
        class="text-light-blue-500"
      >
        Go to Instagram Analytics
      </a>
    </button>
  );
}