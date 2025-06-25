function Nav(){
    return(
        <div className=" flex justify-center relative ">
        <div className=" h-11 md:h-15 md:rounded-4xl mt-5 w-[95%] border-2 bg-white/5 backdrop-blur-2xl rounded-3xl border-white/20 z-20 flex justify-between items-center fixed">
        {/* Logo Part */}
        <div className="h-[90%] w-32 flex items-center justify-center ml-3">
            <img src="/logo.webp" alt="" />
        </div>

        {/* Connect Us Part */}
        <div className=" flex items-center justify-between gap-5 mr-5">
        <div className=" h-[80%] w-24 border-2 border-pink-400 rounded-md flex justify-center items-center">
              <div className=" h-6 m-1 shadow-pink-400 shadow-2xl w-[80%] rounded-md bg-white/30 backdrop-blur-2xl flex justify-center items-center">
                <h1 className=" text-sm text-white">Connect</h1>
              </div>
        </div>
        <div>
        <label className="btn btn-circle swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  {/* hamburger icon */}
  <svg
    className="swap-off fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
  </svg>

  {/* close icon */}
  <svg
    className="swap-on fill-current"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 512 512">
    <polygon
      points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
  </svg>
</label>
        </div>
        

        </div>
        </div>
        </div>
    )
}
export default Nav;