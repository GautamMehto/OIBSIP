
const Biography = () => {
    const BiographyArray = [
        {
            title: "Early Life",
            points: ["Born on April 5, 1955, in Nagoya, Aichi Prefecture, Japan.", "Developed an interest in drawing at a young age, inspired by manga and animation."]
        },
        {
            title: "Career Beginnings",
            points: ["Started his career as a manga artist in the late 1970s.", "Gained recognition for his early works, including 'Wonder Island' and 'Today's Highlight Island."]
        },
        {
            title: "Breakthrough with Dr. Slump",
            points: ["Achieved mainstream success with the manga series 'Dr. Slump,' serialized from 1980 to 1984 in Weekly Shōnen Jump.", "Known for its humor, quirky characters, and imaginative storylines.", "Adapted into an anime series and several animated films."]
        },
        {
            title: "Creation of Dragon Ball",
            points: ["Created 'Dragon Ball,'' serialized in Weekly Shōnen Jump from 1984 to 1995.", "Follows the adventures of Son Goku and his friends in their quest for the Dragon Balls.", "Divided into two parts: 'Dragon Ball' and 'Dragon Ball Z.'"]
        },
        {
            title: "Pop Culture Phenomenon",
            points: ["'Dragon Ball' became a global sensation, spawning numerous adaptations, including anime series, movies, and video games", "Contributed to the popularization of anime and manga worldwide."]
        },
        {
            title: "Character Design Work",
            points: ["Provided character designs for the 'Dragon Quest' series of video games, starting in 1986.", "Also designed characters for the classic RPG 'Chrono Trigger' in 1995."]
        },
        {
            title: "Later Works and Contributions",
            points: ["Continued to work on various manga series and one-shots, including 'Cowa!'' and 'Sand Land'", "Collaborated on the 2013 film 'Dragon Ball Z: Battle of Gods' and its sequel, 'Dragon Ball Z: Resurrection 'F'", "Still actively involved in the 'Dragon Ball' franchise, providing character designs and story outlines for new projects."]
        },
        {
            title: "Personal Life",
            points: ["Known for his reclusive nature and preference for privacy.", "Reportedly enjoys collecting classic cars and motorcycles."]
        },
        {
            title: "Legacy",
            points: ["Regarded as one of the most influential manga artists of all time.", "His work continues to inspire generations of manga artists, animators, and storytellers.", "'Dragon Ball' remains a cultural touchstone and a symbol of Japanese pop culture worldwide."]
        },
    ]
    return (
        <div className="sm:px-10 min-[350px]:px-5 mt-10">
            <h1 className="Titles sm:text-2xl min-[350px]:text-xl font-semibold my-5">
                Biography
            </h1>
            
            <div className="flex flex-col gap-5">
                {BiographyArray.map((item) => {
                    return <>
                        <div className="w-full flex flex-col ">
                            <p className=" sm:text-xl min-[350px]:text-[15px] font-normal">
                                {item.title}:
                            </p>
                            <div className="">
                                <ul className="list-disc list-inside">
                                    {item.points.map((bulletsPoints, index) => {
                                        return <li key={index} className="font-light sm:text-xl min-[350px]:text-xs">
                                            {bulletsPoints}
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default Biography