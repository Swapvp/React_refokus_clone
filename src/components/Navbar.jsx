import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-10 px-4 flex items-center gap-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCqafvZBzjnkFCIj6pg7qFtiNdo2pxLg5GQ&s"
        alt="refokus logo"
        className="w-28"
      />
      <div className="flex gap-6 items-center">
        {["Home", "Work", "Culture", "", "News"].map((elem, i) =>
          elem.length === 0 ? (
            <span className="w-[1px] h-5 bg-zinc-100 text-white"></span>
          ) : (
            <a href="#" className="text-sm text-white">
              {i === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="w-4 h-2 bg-green-400"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
