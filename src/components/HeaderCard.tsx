import { fetchRandomColor } from "../lib/services";

type HeaderCardProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function HeaderCard({handleClick, bgColor, setBgColor}: HeaderCardProps ) {

  async function handleChangeColorClick (){
    const newColor = await fetchRandomColor()
    setBgColor(newColor.hex)
  }

  return (
    <div className="w-full max-w-4xl flex  flex-col gap-7 px-10 py-6 mx-auto bg-white border-2 border-white rounded-lg bg-opacity-15 ">
    <h1 className="font-bold brightness-50 text-4xl md:text-7xl font-display " style={{color: bgColor}}>
      Frases Motivacionais
    </h1>
    
    <div className=" w-full justify-center flex items-center gap-4 flex-wrap">

    <button
      onClick={handleClick}
      className=" px-4 py-2 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    >
      Me dê uma dose de ânimo
    </button>
    <button  className=" px-4 py-2 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" onClick={handleChangeColorClick}>
      Trocar a cor
    </button>

    <div>
    <label htmlFor="color-changer" className=" px-4 py-2 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" >
    <span>Escolha uma cor</span>

    <input onChange={(e : React.ChangeEvent<HTMLInputElement>) => setBgColor(e.currentTarget.value)} id="color-changer" name="color-changer" type="color" value={bgColor} className="w-0 h-0" />
    </label>

    </div>

    </div>

  </div>
  )
}
