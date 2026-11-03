
const Footer = () => {
  return (
    <footer
      className="mx-auto mt-8 w-full border-t border-[#1B00C9]/10 px-6 py-6"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-xs font-semibold text-[#100A45]">
          Garance HAUCK
          <span className="ml-2 font-normal text-black/40">
            © 2026
          </span>
        </p>

        <p className="text-xs text-black/45">
          Ergothérapie · Technologie · Handicap
        </p>
      </div>
    </footer>
  );
};

export default Footer;
