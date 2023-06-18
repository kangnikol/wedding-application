const SecondSection = () => {
  return (
    <div
      className="bg-[#BF806A] h-screen flex items-center justify-center flex-col px-96 text-white"
      id="2nd-section"
    >
      <h1 className="text-3xl text-center font-dm py-4">
        Assalamualaikum Warahmatullahi Wabarakatuh
      </h1>
      <p className="text-lg font-dm text-center">
        Dengan menyebut nama Allah Subhanahu Wa Ta&apos;ala yang Maha Pengasih
        dan Maha Penyayang. Kami mengundang Anda untuk menghadiri pernikahan
        putra-putri kami
      </p>
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-end flex-col">
            <h1 className="font-dm text-xl">John Doe</h1>
            <div className="border border-white rounded-full py-2 px-3 font-bold font-domine">
              @blablabla
            </div>
            <div className="flex flex-col items-end">
              <p className="italic">Putra Pertama dari</p>
              <p>Bapak blablabla</p>
              <p>Ibu blablabla</p>
            </div>
          </div>
          <div>
            <img src="./1.jpg" alt="" />
          </div>
        </div>
        <div>
          <div className="flex items-start flex-col">
            <h1 className="font-dm text-xl">John Doe</h1>
            <div className="border border-white rounded-full py-2 px-3 font-bold font-domine">
              @blablabla
            </div>
            <div className="flex flex-col items-start">
              <p className="italic">Putra Pertama dari</p>
              <p>Bapak blablabla</p>
              <p>Ibu blablabla</p>
            </div>
          </div>
          <div>
            <img src="./2.jpg" className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
