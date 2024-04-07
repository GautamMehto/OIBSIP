
const Header = () => {
  return (
    <div className='w-fullflex justify-center items-center bg-[url("https://images2.alphacoders.com/610/thumb-440-610764.webp")] text-white grayscale bg-center bg-no-repeat bg-cover py-10'>
        <header className='flex justify-center gap-2 flex-col items-center'>
        <h1 className='sm:text-3xl min-[350px]:text-2xl'>Akira Toriyama</h1>
        <p className='Font1 sm:text-xl text-center min-[350px]:text-xs'>Renowned Manga Artist and Character Designer</p>
        <p className='sm:text-[14px] min-[350px]:text-xs'>
            <b>Born: </b>April 5, 1955 - Kiyosu, Japan<br />
            <b>Died: </b>March 1, 2024 - Tokyo, Japan<br />
        </p>
      </header>
    </div>
  )
}

export default Header