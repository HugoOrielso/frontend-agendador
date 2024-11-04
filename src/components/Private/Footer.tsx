import logo from '/public/logo.webp'


const Footer = () => {
  return (
    <footer className='w-full max-h-32 bg-[#E92176] flex items-center justify-center'>
        <img src={logo} alt="logo la ragazza riccia" className='max-w-[80px]' />
    </footer>
  )
}

export default Footer