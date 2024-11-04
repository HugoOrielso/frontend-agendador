import audreyImg from '@/assets/audrey.webp'
import { CreditCart, GeoLocationSalon, Reloj } from '@/components/Icons';
import { useLocation } from 'react-router-dom';
import AsideInfoPrenotare from '../AsideInfoPrenotare';

const AsideInfoSalon = () => {
    const location = useLocation(); 
    const path = location.pathname; 
    const extractedPart = path.split('/').slice(0, 3).join("");
    
    return (
    <section className='flex flex-col items-center w-full flex-1 grow px-2 '>
        <div >
            <section className='flex gap-1 flex-col items-center justify-center ' >
                <picture>
                    <img src={audreyImg} alt="avatar audrey" className='relative imginteligente aspect-auto overflow-hidden rounded-full shrink-0 size-20 object-cover'/>
                </picture>
                <h2  className='text-[#E92176] text-2xl custom-text-shadow-pink' >Audrey lozano</h2>
                {extractedPart === 'incontrosbt' && 
                    <>
                        <h2 className='font-semibold text-[#202945] text-xl '>Incontro in salone con Audrey Lozano, San Benedetto del Tronto</h2>
                        
                    </>
                }
                {extractedPart === 'incontrope' && 
                    <>
                        <h2 className='font-semibold text-[#202945] text-xl '>Incontro in salone con Audrey Lozano, Pescara</h2>
                    </>
                }
            </section>
            <section className='flex flex-col items-start justify-center gap-4 '>
                <p className='text-zinc-500 flex items-center gap-1'>
                    <span>
                        <Reloj />
                    </span>
                    <span className='text-[#03030c]'>
                        1:30 min
                    </span>
                </p>
                <p className='text-zinc-500 flex items-center gap-2'>
                    <span>
                        <GeoLocationSalon />
                    </span>
                    <span>
                        {extractedPart === 'incontrosbt' && 
                            <span className='text-[#03030c]'>
                                Via Montebello 44, San Benedetto del Tronto
                            </span>
                        }
                        {extractedPart === 'incontrope' && 
                            <span className='text-[#03030c]'>
                                Via Napoli 39, Pescara
                            </span>
                        }
                    </span>
                </p>
                <p className='text-zinc-500 flex items-center gap-2'>
                    <span>
                        <CreditCart/>
                    </span>
                    <span className='text-[#03030c]'>
                        € 50 EUR, minimo da accantonare
                    </span>
                </p>
                <p className='text-pretty'>
                    <span className='font-bold '>Riccioluta mia!</span> ti invito a <span className='font-bold'>leggere bene</span>  la descrizione sotto, <span className='font-bold'>prima di prenotare</span>  il nostro incontro.
                </p>
                <AsideInfoPrenotare/>
            </section>
        </div>
    </section>
    )
}

export default AsideInfoSalon