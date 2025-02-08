
export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 bg-black text-white">
      <p className="text-yellow-500">This website is in beta.</p>
      <p className="mx-2">|</p>
      <p>Made with ❤️ by <a href="https://github.com/william-spongberg" className="text-blue-500">William Spongberg</a></p>
      <p className="mx-2">|</p>
      <p>&copy; William Spongberg {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}