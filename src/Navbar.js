import { useState as UseState } from "react";
import Logo from "./Logo";

function Navbar(props) {
  return (
    <nav className="bg-white flex items-center h-20 justify-between p-5 md:p-16 transition-all md:rounded-t-[30px] max-sm:fixed max-sm:top-0 max-sm:w-full dark:bg-black">
      <Logo />
      <div>
        <button
          className="dark:text-white"
          onClick={() => {
            props.setDark(!props.isDark);
            props.setDarkCookie(!props.darkCookie);
          }}
        >
          dark
        </button>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
      <div className="max-md:hidden md:visible flex w-[50%] justify-evenly">
        <Button>Home</Button>
        <Button>Portfolio</Button>
        <Button>Contact</Button>
      </div>
    </nav>
  );
}

function Button(props) {
  return (
    <div
      onClick={props.onClick}
      className="text-grey hover:text-black font-serif"
    >
      <button>{props.children}</button>
    </div>
  );
}

function Hamburger(props) {
  const [open, setState] = UseState(false);

  return (
    <div className="transition-all duration-300">
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="dark:text-white w-10 h-10"
          onClick={() => setState(!open)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="dark:text-white w-10 h-10"
          onClick={() => setState(!open)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
      <DropdownMenu open={open} />
    </div>
  );
}

function DropdownMenu(props) {
  return (
    <div
      className={`dark:bg-black bg-white flex py-10 px-16 h-full w-[100vw] fixed right-[0] overflow-hidden ${
        props.open ? "translate-x-0" : "translate-x-full"
      } ease-in-out duration-300`}
    >
      <ol className="flex flex-col">
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="Portfolio">Portfolio</MenuItem>
        <MenuItem href="Contact">Contact</MenuItem>
      </ol>
    </div>
  );

  function MenuItem(props) {
    return (
      <li className="dark:text-white px-5 my-7 text-3xl font-serif">
        <a href={props.href}>{props.children}</a>
      </li>
    );
  }
}

export default Navbar;
