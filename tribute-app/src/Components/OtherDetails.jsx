
const OtherDetails = () => {

  return (
    <div className='sm:px-10 min-[350px]:px-5 mb-10'>
      <h1 className="Titles sm:text-2xl min-[350px]:text-xl font-semibold my-5">
        Family
      </h1>

      <div className="flex flex-col gap-5">

        <div>

          <p className="sm:text-xl min-[350px]:text-[15px] font-normal">
            Spouse
          </p>
          <ul className='list-disc list-inside'>
            <li className="font-light sm:text-xl min-[350px]:text-xs">
              Yoshimi Kato(1982 - March 1, 2024) (his death, 2 children)
            </li>
          </ul>
        </div>
        <div>

          <p className="sm:text-xl min-[350px]:text-[15px] font-normal">
            Children
          </p>
          <ul className='list-disc list-inside'>
            <li className="font-light sm:text-xl min-[350px]:text-xs">
              Sasuke Toriyama
            </li>
            <li className="font-light sm:text-xl min-[350px]:text-xs">
              Kikka
            </li>
          </ul>
        </div>
      </div>

      <h1 className="Titles sm:text-2xl min-[350px]:text-xl font-semibold my-5">
        Trivia
      </h1>

      <div className="flex flex-col gap-5">
        <ul className='list-disc list-inside'>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
            Had a fear of mice, and wouldn't go into work if there was a mouse infestation.
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
            Japanese manga artist.
          </li>
        </ul>
      </div>

      <h1 className="Titles sm:text-2xl min-[350px]:text-xl font-semibold my-5">
        Quotes
      </h1>
      
      <div className="flex flex-col gap-5">

        <ul className='list-disc list-inside'>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          About Drunken Master (1978): If I hadn't seen this movie, I would never have come up with Dragonball.
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          His favourite "Dragonball" character: I believe mine would be Piccolo. He was the first character in my manga where I was like, "He has a scary face, but he's so cool!" It really is cliché when bad guys turn into good guys, but it just feels great drawing it!
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          About Blue Dragon (2007): "This may be my final anime, I'm a little worried (about it). There's incredible pressure, but at the same time, there's a sense of accomplishment - that it's worth doing. Blue Dragon will be a masterpiece, not simply because I'm working hard on it, but because the staff is expecting nothing less."
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          Nightmares never last. One day you wake up and they're gone.
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          Too much fantasy loses reality, too much hope may seem somehow empty.
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          Move well, study well, play well, eat well, rest well - That is the Turtle Master way!
          </li>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
          Tackle life with as much energy as Goku! I'll try to do the same!   
          </li>
        </ul>
      </div>
      <h1 className="Titles sm:text-2xl min-[350px]:text-xl font-semibold my-5">
      More unbelievable facts from his life here  
      </h1>
      <div className="flex flex-col gap-5">
        <ul className='list-disc list-inside'>
          <li className="font-light sm:text-xl min-[350px]:text-xs">
            <a href="https://en.wikipedia.org/wiki/Akira_Toriyama" target='_blank' className='hover:underline hover:text-blue-500'>
            Click Here For More 👈
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OtherDetails