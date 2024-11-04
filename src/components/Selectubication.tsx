import audreyImg from '@/assets/audrey.webp'
import sambImg from '@/assets/samb.webp'
import pesbImg from '@/assets/pes.webp'

const Selectubication = () => {
  return (
    <section className="flex flex-col items-center h-full justify-center mt-20 w-full">
        <div className="flex h-full flex-col items-center justify-center border-none  gap-4 md:w-full   md:border rounded sm:p-8 lg:shadow lg:max-w-[95%] w-full">
            <section className="flex items-center justify-center rounded-[20px] mx-2 p-2 w-full shadow ">
                <div className="flex flex-col gap-4 max-w-[350px] items-center justify-center ">
                    <div className='flex gap-2 flex-col items-center justify-center'>
                        <figure className="flex items-center justify-center relative">
                            <img src={audreyImg} alt="avatar audrey" className=' aspect-auto  rounded-full shrink-0 size-28 object-cover '/>
                            <img src={audreyImg} alt="avatar audrey" className='absolute opacity-70 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]'/>
                        </figure>
                        <h2  className='text-[#E92176] text-2xl custom-text-shadow-pink'>Audrey lozano</h2>
                    </div>
                    <div>
                        <p className="text-pretty text-sm text-[#202945e0] ">
                            Benvenuto nella mia pagina di pianificazione. Segui le istruzioni per aggiungere un evento al mio calendario.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col mb-12 gap-8 lg:flex-row w-full items-center lg:justify-between">
                <a href="/incontrope" className="min-h-[180px] w-[95%] md:w-full max-w-[750px] rounded-[20px] before:absolute before:inset-0 before:w-full before:h-full before:bg-white before:-z-10 shadow relative flex  gap-5  items-stretch  overflow-hidden  transition-all duration-300  hover:scale-105">
                    <div className='overflow-hidden flex w-[75%] flex-col items-start px-2 justify-center'>
                        <div className="flex items-center gap-2 ">
                            <span className="text-left font-bold custom-text-shadow text-[#E92176] custom-text-shadow-pink">Incontro in salone Pescara</span>
                        </div>
                        <div>
                            <p className="flex text-pretty text-left text-sm lg:text-base overflow-hidden line-clamp-3 text-[#202945e0]">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro.
                            </p>
                        </div>
                    </div>
                    <picture className="flex items-center justify-center relative">
                        <img src={pesbImg} alt="imagen pescara" className=' -z-10 object-cover object-center h-full shrink-0  right-0 top-0 w-[200px] mascara' />
                    </picture>
                </a>
                <a href="/incontrosbt" className="min-h-[180px] max-w-[750px] rounded-[20px] before:absolute before:inset-0 before:w-full before:h-full before:bg-white before:-z-10 shadow relative flex  gap-5  items-stretch  overflow-hidden transition-all duration-300  hover:scale-105 w-[95%] md:w-full ">
                    <div className='overflow-hidden flex w-[75%] flex-col items-start px-2 justify-center'>
                        <div className="flex items-center gap-2 ">
                            <span className="text-left font-bold custom-text-shadow text-[#E92176] custom-text-shadow-pink">Incontro in salone Sam Benedetto</span>
                        </div>
                        <div>
                            <p className="flex text-pretty text-left text-sm lg:text-base overflow-hidden line-clamp-3 text-[#202945e0]">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro.
                            </p>
                        </div>
                    </div>
                    <picture> 
                        <img src={sambImg} alt="imagen pescara" className='-z-10 object-cover object-center h-full shrink-0  right-0 top-0 w-[200px] mascara' />
                    </picture>
                </a>
            </section>
        </div>
    </section>
  )
}

export default Selectubication