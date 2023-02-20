import Link from "./link";

const Navbar = ({ href, path, target, children, ...props }) => {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about/",
    },
    {
      name: "Blog",
      path: "/blog/",
    },
  ];

  return (
    <nav
      className="nav bg-white border-gray-200 px-2 sm:px-4 py-2.5"
      aria-label="Primary"
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" aria-label="Go home" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Nandan
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="nav-list flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navData.map((item, i) => (
              <Link
                key={i}
                text={item.name}
                href={item.path}
                style="secondary"
                isFilled={false}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
