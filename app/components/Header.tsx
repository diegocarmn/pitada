import ThemeToggleButton from "./ThemeToggleButton";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex bg-accent-fixed shadow-sm shadow-black/20"
      role="banner"
    >
      <div className="flex items-center justify-between w-screen px-4 py-2 sm:px-4 bg-accent-fixed lg:max-w-2/3 lg:mx-auto">
        <Image
          src="/logo-full.svg"
          alt="Pitada - Logo da aplicação"
          className="py-2 w-40 h-15 md:w-52 md:h-18"
          width={200}
          height={50}
        />
        <nav role="navigation" aria-label="Alternar tema">
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
