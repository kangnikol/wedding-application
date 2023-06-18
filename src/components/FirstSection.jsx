import { useEffect, useState } from "react"

const FirstSection = () => {
  const [time, setTime] = useState({
    getDay: "0",
    getHour: "0",
    getMinute: "0",
    getSecond: "0",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("June 31, 2023 00:00:00").getTime()

      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24

      const now = new Date().getTime()
      const gap = targetDate - now
      const days = Math.floor(gap / day)
      const hours = Math.floor((gap % day) / hour)
      const minutes = Math.floor((gap % hour) / minute)
      const seconds = Math.floor((gap % minute) / second)

      if (gap < 0) {
        clearInterval(interval)
      } else {
        setTime({
          getDay: days,
          getHour: hours,
          getMinute: minutes,
          getSecond: seconds,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleClickScroll = () => {
    const element = document.getElementById("2nd-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="h-screen flex items-center justify-center flex-col">
      <img
        src="./bg.jpg"
        alt="bg"
        className="w-full h-full absolute top-0 left-0 object-cover bg-center -z-50 brightness-50"
      />
      <div className="p-4 flex flex-col items-center">
        <h1 className="text-white font-domine text-xl">Pernikahan</h1>
        <p className="text-white font-dm text-2xl">John Doe & Jane Doe</p>
      </div>
      <div className="border-2 border-white text-white font-domine text-2xl p-4 flex flex-row gap-4">
        <div className="flex items-center flex-col">
          <h1>{time.getDay}</h1>
          <span className="text-xs">Hari</span>
        </div>
        <div className="flex items-center flex-col">
          <h1>{time.getHour}</h1>
          <span className="text-xs">Jam</span>
        </div>
        <div className="flex items-center flex-col">
          <h1>{time.getMinute}</h1>
          <span className="text-xs">Menit</span>
        </div>
        <div className="flex items-center flex-col">
          <h1>{time.getSecond}</h1>
          <span className="text-xs">Detik</span>
        </div>
      </div>
      <div
        className="mouse mt-4 cursor-pointer"
        onClick={handleClickScroll}
      ></div>
    </main>
  )
}

export default FirstSection
