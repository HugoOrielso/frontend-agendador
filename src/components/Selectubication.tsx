import audreyImg from '@/assets/audrey.webp'


const Selectubication = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full md:min-h-screen ">
        <div className="flex flex-col items-center justify-center p-2 gap-16 md:w-full md:max-w-[90%]  md:border rounded sm:p-8 ">
            <section className="flex items-center justify-center  w-full ">
                <div className="flex flex-col gap-4 max-w-[350px] items-center justify-center">
                    <div className='flex gap-2 flex-col items-center justify-center'>
                        <picture>
                            <img src={audreyImg} alt="avatar audrey" className='relative imginteligente aspect-auto overflow-hidden rounded-full shrink-0 size-28 object-cover'/>
                        </picture>
                        <h2  className='text-[#E92176] text-2xl custom-text-shadow-pink'>Audrey lozano</h2>
                    </div>
                    <div>
                        <p className="text-pretty text-sm text-[#202945e0] ">
                            Benvenuto nella mia pagina di pianificazione. Segui le istruzioni per aggiungere un evento al mio calendario.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex flex-col gap-8 sm:flex-row w-full items-center justify-center">
                <a href="/incontrope" className="flex bg-white  transition-all duration-300  max-w-[500px] w-full hover:bg-gradient-to-br border rounded from-white via-white white-200 hover:from-pink-100 hover:via-white hover:to-pink-200">
                    <article className="flex flex-col min-h-[180px] w-full p-2   gap-8 ">
                        <div className="flex items-center gap-2 ">
                            <span className="flex shrink-0  overflow-hidden rounded-full border size-8 border-none bg-[#0AE8F0]"></span>
                            <span className="text-left font-bold custom-text-shadow">Incontro in salone con Audrey Lozano PE</span>
                        </div>
                        <div>
                            <p className="flex text-pretty text-left text-sm sm:text-base ">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro. I servizi che puoi ricevere in salone sono:* Pacchetto Pre…
                            </p>
                        </div>
                    </article>
                </a>
                <a href="/incontrosbt" className="flex bg-white transition-all duration-300  max-w-[500px] w-full hover:bg-gradient-to-br hover:from-pink-100 hover:via-white hover:to-pink-200 border rounded">
                    <article className="flex flex-col min-h-[180px] w-full p-2  gap-8 ">
                        <div className="flex items-center gap-2 ">
                            <span className="flex shrink-0  overflow-hidden rounded-full border size-8 border-none bg-[#0AE8F0]"></span>
                            <span className="text-left font-bold">Incontro in salone con Audrey Lozano SBT</span>
                        </div>
                        <div>
                            <p className="flex text-pretty text-left text-sm sm:text-base ">
                                Riccioluta mia! ti invito a leggere bene la descrizione sotto, prima di prenotare il nostro incontro. I servizi che puoi ricevere in salone sono:* Pacchetto Pre…
                            </p>
                        </div>
                    </article>
                </a>
            </section>
        </div>
    </section>
  )
}

export default Selectubication