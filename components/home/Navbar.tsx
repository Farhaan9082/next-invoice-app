function Navbar() {
  return (
    <nav className="bg-purple md:h-screen relative z-10">
      <div className="bg-light-purple p-4 w-16 rounded-r-lg flex justify-center items-center md:w-20 md:p-5">
        <img
          className="w-6 h-8 md:w-8 md:h-10"
          src="/file-invoice-dollar-solid.png"
          alt="logo"
        />
      </div>
    </nav>
  );
}

export default Navbar;
