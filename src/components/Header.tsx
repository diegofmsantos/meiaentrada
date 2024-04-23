import Image from "next/image"

export const Header = () => {

    return (
        <header className="bg-[#005E9E] w-full h-[85px] flex flex-col fixed">
            <div className="bg-[#F0AF35] h-[5px]"></div>
            <div className="flex justify-between px-4 lg:px-28 items-center text-white text-lg font-semibold mt-2">
                <div>
                    <Image src="/assets/logo.png" width={171} height={75} alt="Logo" />
                </div>
                <nav className="hidden xl:flex gap-4">
                    <div>Lei da Meia-entrada</div>
                    <div className="border-b-4 border-[#F0AF35] pb-2">Validação</div>
                    <div>Chaves públicas</div>
                    <div>FAQ</div>
                    <div>Notícias</div>
                </nav>
                <div className="w-10 h-10 border border-gray-400 p-2 xl:hidden">
                    <Image src="/assets/menu-principal.png" width={40} height={40} alt="Menu" />
                </div>
            </div>
        </header>
    )
}