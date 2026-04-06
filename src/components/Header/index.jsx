import Brand from "./Brand";
import ContactBox from "./ContactBox";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row">
      <div className="w-full flex justify-between md:justify-start items-center p-1 md:p-4 z-[1] bg-[#e2e4e7] dark:bg-white/20_OFF dark:backdrop-blur-xs_OFF border-b-4 border-[#6578c1]">
        <Brand className="w-40 md:w-60" />
        <nav role="navigation" aria-label="Main">
          {/* Desktop Menu */}
          <DesktopMenu />
          {/* Mobile Menu */}
          <MobileMenu />
        </nav>
      </div>
      <ContactBox />
    </header>
  );
};

export default Header;
