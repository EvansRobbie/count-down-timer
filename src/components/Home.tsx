import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval: any = useRef();
  const startTimer = () => {
    const countDownDate = new Date("November 30, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const difference = countDownDate - now;
      // console.log(difference);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString();
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      ).toString();
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString();

      if (difference < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 md:p-24 bg-black/90 w-full h-full">
      <h2 className="text-3xl font-bold text-center text-gold">
        Our webpage is coming soon.
      </h2>
      <p className="text-base font-medium py-3 max-w-3xl mx-auto text-start break-words md:text-center">
        {`our webpage is currently under maintenance.We're working hard to improve our website and we'll 
        be ready to launch after.`}{" "}
      </p>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-4 relative ">
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <span className="border border- w-[4.3rem] text-gold p-4 rounded-xl text-3xl font-semibold text-center ">
            {days}
          </span>
          <span className="text-sm pt-4 font-semibold text-gold">Days</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <span className="border p-4 w-[4rem] text-gold rounded-xl text-2xl  text-center font-bold  border-gold">
            {hours}
          </span>
          <span className="text-sm pt-4 font-semibold">Hours</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <span className="border p-4 w-[4rem] text-gold  rounded-xl text-2xl text-center font-bold  border-gold">
            {minutes}
          </span>
          <span className="text-sm pt-4 font-semibold">Minutes</span>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <span className="border w-[4.3rem]  border- text-gold  p-4 rounded-xl text-center text-3xl font-bold">
            {seconds}
          </span>
          <span className="text-sm pt-4 font-semibold text-gold">Seconds</span>
        </div>
        {/* <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2  -z-10 left-1/2">
          <div className="relative aspect-square h-[500px]">
            <Image src="/logo.png" fill priority className="" alt="" />
          </div>
        </div> */}
      </div>
      <p className="mt-6 pb-4">Please Email us to get the latest update</p>
      <button className="border rounded-xl max-w-max px-6 bg-gold border-gold text-black hover:bg-black hover:text-gold  shadow-md shadow-white/20 duration-300 ease-in py-3 font-semibold text-sm">
        <a href="#">Send us an Email</a>
      </button>
    </main>
  );
}
