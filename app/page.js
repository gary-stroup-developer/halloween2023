import Link from "next/link";
import { creepster,jolly, joti } from "./utils/fonts";

export default function Home() {
    const halloween = new Date('October 31, 2023').getDate();
    const currentDay = new Date(Date.now()).getDate();

    var difference = halloween - currentDay;
  return (
       <main id="main-bg" className="m-0 h-screen flex flex-col justify-around">
            <div className={`flex flex-col justify-center items-center relative w-full ${creepster.className}`}>
                <p className="text-7xl text-green-500"> Days <span className="text-purple-600">to</span> <span className="text-orange-600">Halloween</span></p>
                <p className="text-9xl text-green-500">{difference}</p>
            </div>
            <div id="countdown-container-footer">
                <div className="socials"></div>
                <Link
                href={"/dashboard"}
                ><p id="homescreen-nav" className={`text-purple-600 text-3xl md:text-5xl ${jolly.className}`}>Enter if you dare</p></Link>
            </div>
        </main>
  )
}
