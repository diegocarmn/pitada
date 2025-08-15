import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 bg-transparent ext-accent">
      <span className="font-brand text-primary flex items-center gap-2 text-3xl">
        <Logo className="fill-primary h-20 w-20" />
         PITADA
      </span>
      <nav>
        <ThemeToggleButton />
      </nav>
    </header>
  );
};

export default Header;
