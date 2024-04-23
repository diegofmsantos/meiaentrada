export const Footer = () => {

    return (
        <footer className="bg-[#222F40] md:h-[304px]">
            <div className="bg-[#F0AF35] h-[5px]"></div>
            <div className="max-w-[1100px] m-auto flex flex-col gap-4 justify-center items-center">
                <h2
                    className="text-3xl lg:text-[34px] text-white text-center mt-8 font-semibold">
                    meiaentrada.org.br
                </h2>
                <div className="md:flex gap-28 ml-20 w-full text-[#F0AF35] text-[14px] lg:text-[16px] font-thin">
                    <div className="flex flex-col gap-4">
                        <p>Home</p>
                        <p>Lei da Meia-entrada</p>
                        <p>Chaves públicas</p>
                        <p>FAQ</p>
                    </div>
                    <div className="flex flex-col gap-4 md:w-60">
                        <p>Notícias</p>
                        <p className="text-[13px]">Termos de Uso e Política de Privacidade</p>
                    </div>
                </div>
                <p className="px-8 mb-2 text-lg text-center text-[#F0AF35] font-thin">@Meiaentrada.org.br - Todos os Direitos Reservados 2024</p>
            </div>
        </footer>
    )
}