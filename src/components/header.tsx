export const Header = () => {
  return (
    <div className="container mx-auto flex flex-col items-center w-full">
      {/* Nav */}
      <div className='flex w-full justify-between items-center mt-8'>
        <img src="images/logo.png" alt="Logo" className='object-contain w-40 -translate-x-3 h-16' />
        <div className="flex gap-x-8">
          <img src="images/search.svg" alt="Search" />
          <img src="images/profile.svg" alt="Profile" />
          <img src="images/cart.svg" alt="Cart" />
        </div>
      </div>
      {/* Big image */}
      <div
        className="bg-[url('https://picsum.photos/1200/400')] bg-center bg-cover w-full h-64 mt-8 relative"
        style={{
          filter: "drop-shadow(4px 8px 20px rgba(0, 0, 0, 0.4))"
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center ">
          <p
            className="text-white font-medium text-3xl text-center"
            style={{
              textShadow: "#000000 1px 0px 10px"
            }}
          >
            Unlock your creativity with stock image, stock video, and more
          </p>
        </div>
      </div>
      {/* Quick search keyword */}
      <div className="mt-12 flex font-bold gap-4 text-[#626262]">
        <p>Photo</p>
        <p>Illustrations</p>
        <p>Vectors</p>
        <p>Video</p>
        <p>Free</p>
        <p>Fronts</p>
        <p>Plugins</p>
        <p>3D</p>
        <p>Generate</p>

      </div>
      {/* Search bar */}
      <div className="flex items-center relative w-full max-w-[38rem] mx-auto mt-8">
        <input type="text" className="border rounded-lg p-2 px-8 pl-16 w-full" placeholder="Search" />
        <img src="images/search-2.svg" alt="Search" className="absolute left-5 w-6 h-6" />
      </div>
    </div>
  )
}