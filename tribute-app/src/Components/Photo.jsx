
const Photo = () => {
  return (
    <div className='w-2/6 bg-black h-auto'>
      <div className="md:w-[23.33%] min-[350px]:w-[30%] flex flex-col gap-5  fixed md:top-[10%] min-[350px]:top-[5%] md:right-[5%] min-[350px]:right-[1.5%]">
        <img src="https://ca-times.brightspotcdn.com/dims4/default/08a4938/2147483647/strip/true/crop/1929x3000+0+0/resize/1200x1866!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2Feb%2Fa3c572f04851b8233a26a7f02028%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2059264270" alt="Akira Toriyama Photo" className='h-fit' />
        <h2 className="px-2 sm:text-[15px] min-[350px]:text-xs text-white  lg:hidden min-[350px]:block">
          "The world isn't perfect. But it's there for us, doing the best it can. And that's what makes it so damn beautiful."
          <br />
          <b>By Akira Toriyama</b>
        </h2>
      </div>
    </div>
  )
}

export default Photo