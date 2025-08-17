import ThemeToggleButton from "./ThemeToggleButton";
import Logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex bg-primary">
      <div className="flex items-center justify-between w-screen px-4 py-2 sm:px-4 bg-primary lg:max-w-2/3 lg:mx-auto">
        <span className="font-brand text-text-secondary flex items-center gap-2 text-2xl md:text-3xl font-semibold">
          <Logo className="fill-text-secondary h-15 w-15 md:h-18 md:w-18" />
          PITADA
        </span>
        <nav>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
