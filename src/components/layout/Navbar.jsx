function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Restaurants", link: "#restaurants" },
    { name: "Categories", link: "#categories" },
    { name: "AI Assistant", link: "#assistant" },
    { name: "Contact", link: "#download" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white shadow-lg">
            Z
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Zevora</h1>

            <p className="-mt-1 text-xs text-orange-500">AI Food Ordering</p>
          </div>
        </div>

        {/* Navigation */}

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className={`font-medium transition-all duration-300 hover:text-orange-500 ${
                  item.name === "Home" ? "text-orange-500" : "text-gray-700"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium transition-all duration-300 hover:border-orange-500 hover:text-orange-500">
            Login
          </button>

          <button className="rounded-xl bg-orange-500 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
