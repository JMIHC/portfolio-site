import { NavLink } from "react-router";

function navClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? "font-bold no-underline"
    : "text-text-secondary no-underline hover:text-text";
}

export function Nav() {
  return (
    <nav aria-label="Main navigation" className="pt-8 pb-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <NavLink to="/" className="text-lg font-bold no-underline hover:text-black">
          Johnny Cornyn
        </NavLink>
        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={navClass} end>
            Workshop
          </NavLink>
          <NavLink to="/work" className={navClass}>
            Work
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </div>
      </div>
      <hr />
    </nav>
  );
}
