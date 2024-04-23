import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

const Page = () => {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="p-3 flex flex-col mt-20 md:px-7">
        <section className="flex flex-col justify-start gap-1 mb-2 xl:flex-row xl:items-center xl:my-8 xl:ml-36 xl:mb-2 xl:gap-2">
          <div className="text-start mt-8 text-[28px] text-[#005E9E] font-semibold xl:mt-0">
            Validação de CIE
          </div>
          <span className="text-xl text-[#005E9E] font-semibold md:text-2xl">(Carteira de Identificação Estudantil)</span>
        </section>
        <div className="border-b-4 border-[#005E9E] w-96 md:w-full"></div>
        <section className="max-w-[1100px] w-full m-auto h-[85px] border border-[#cae0d0] bg-[#D4EDDA] mt-12 p-6 text-center text-2xl text-[#155724] font-medium rounded-md">Documento válido!</section>
        <div className="max-w-[1100px] text-center m-auto my-4 text-md font-thin md:text-lg">UNE atesta que Haim Ferreira Araújo Braz é estudante e está regularmente matriculado(a) em Analise e Desenvolvimento de S da instituição Centro Universitario Mauricio de Nassau</div>
        <div className="max-w-[1100px] w-full mt-2 md:flex md:gap-4 xl:m-auto xl:justify-start xl:items-start">
          <div className="flex-1">
            <div className="flex flex-col items-start justify-center border-y mb-2 h-15 md:flex-row md:gap-4 md:justify-start md:h-10 md:items-center md:text-lg">
              <span className="font-semibold lg:ml-36">Nome:</span>
              <div className="xl:ml-12 xl:font-thin"> Haim Ferreira Araújo Braz</div>
            </div>
            <div className="flex flex-col items-start justify-center border-b mb-2 h-15 md:flex-row md:gap-4 md:justify-start md:h-10 md:items-center md:text-lg">
              <span className="font-semibold lg:ml-36">Instituição:</span>
              <div className="text-sm lg:text-lg xl:ml-12 xl:font-thin"> Centro Universitario Mauricio de Nassau</div>
            </div>
            <div className="flex flex-col items-start justify-center border-b mb-2 h-15 md:flex-row md:gap-4 md:justify-start md:h-10 md:items-center md:text-lg">
              <span className="font-semibold lg:ml-36">Curso:</span>
              <div className="xl:ml-12 xl:font-thin"> Analise e Desenvolvimento de S</div>
            </div>
            <div className="flex flex-col items-start justify-center border-b mb-2 h-15 md:flex-row md:gap-4 md:justify-start md:h-24 xl:h-16 md:text-lg">
              <span className="font-semibold md:w-20 md:text-center xl:w-40 lg:ml-36 xl:ml-24">Documento de Identificação:</span>
              <div className="md:ml-8 xl:ml-12 xl:font-thin"> 000000008118287</div>
            </div>
            <div className="flex flex-col items-start justify-center border-b mb-2 h-15 md:flex-row md:gap-4 md:justify-start md:h-10 md:items-center md:text-lg">
              <span className="font-semibold lg:ml-36">Emissor:</span>
              <div className="xl:ml-12 xl:font-thin"> UNE</div>
            </div>
          </div>
          <div className="w-30 h-30 m-auto flex justify-center items-center max-w-[375]:w-40 md:w-52 lg:w-36 xl:w-[160px] xl:h-[213px]">
            <Image className="w-30 h-30 rounded-md max-w-[375]:w-40 md:w-52 lg:w-36 xl:w-[160px] xl:h-[213px]" src="/assets/haim.jpeg" width={100} height={150} alt="Haim" />
          </div>
        </div>
        <section className="max-w-[1100px] m-auto mt-4">
          <p className="text-xl font-medium mt-8">Certificado de Atributo em formato PEM:</p>
          <div className=" border border-gray-200 p-4 mt-4">
            <div className="text-gray-400 font-thin text-center mb-4">-----BEGIN CERTIFICATE-----</div>
            <p className="text-gray-500 break-all text-sm">MIID9DCCAtwCAQEwgYOggYAwe6R5MHcxCzAJBgNVBAYTAkJSMRMwEQYDVQQKDApJQ1AtQnJhc2lsMSYwJAYDVQQLDB1VTklBTyBOQUNJT05BTCBET1MgRVNUVURBTlRFUzErMCkGA1UEAwwiRGllZ28gRnJlZGVyaWNvIE1vcmVpcmEgZG9zIFNhbnRvcwIBAaCBzjCBy6SByDCBxTELMAkGA1UEBhMCQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxFzAVBgNVBAsMDjE0MTIxOTU3MDAwMTA5MRkwFwYDVQQLDBBWaWRlb2NvbmZlcmVuY2lhMQ4wDAYDVQQLDAVWQUxJRDEbMBkGA1UECwwSUGVzc29hIEp1cmlkaWNhIEEzMRgwFgYDVQQLDA9BQyBWQUxJRCBCUkFTSUwxJjAkBgNVBAMMHVVOSUFPIE5BQ0lPTkFMIERPUyBFU1RVREFOVEVTMA0GCSqGSIb3DQEBBQUAAgQAvWYCMCIYDzIwMjQwMTIyMTYyNDA0WhgPMjAyNTAzMzEyMzU5NTlaMIHNMEYGBWBMAQoBMT0TOzAxMDIxOTkzMDg4ODM5MTU0NDUwMDAwMDAwMDEwNTgyNjgwMDAwMDAwMDcxNTEyOTQgICAgICAgICAgMHYGBWBMAQoCMW0Ta0NlbnRybyBVbml2ZXJzaXRhcmlvIE1hdXJpY2lvIGRlIE5hc3NhdSBTVVBFUklPUiAgICAgICBBbmFsaXNlIGUgRGVzZW52b2x2aW1lbnRvIGRlIFNSZWNpZmUgICAgICAgICAgICAgIFBFMAsGBWBMAQQDMQITADB3MDMGA1UdHwQsMCqhKIYmaHR0cHM6Ly91bmUuZG5lLnZjL3YxL2NybC91bmUuY3JsP2lkPTMwHQYDVR0jBBaAFMjcELS9S/92KxXVR8Ng1zkde73OMCEGCCsGAQUFBwEBBBUwEwYIKwYBBQUHMAIEB4YFSFRUUFMwDQYJKoZIhvcNAQEFBQADggEBADys2Sx8I69aBYxFyGUQaZuXun507sZ3A8AAvyaXxAka9y0PlUhD22Dmw9csgbOeFmSlwR8T0+p+o7afQWm98dkkrOFfIRXawOTlanAmtbkK3hT8Y+Cfzqy1p28JDrB+QIOTI7HlcZmjyTUtnwuCwWOwL48qjRSmMzApgPl43wIozXYV1vcVl+GdA+gqHmAIyuivAJgCeKmyqFJdS734HhzTqnJTg9NLIriwQZFQMNjHNuC5Vc7eos6mndPYIXMxqGtgWT1fC9iX2PnPt2Ni365o86+sguuODCChwCQSZB9hsgyYczgmkyq+VV6s3/CofpAj+M7Pt9nw+mJPgCv+KcU=</p>
            <div className="text-gray-400 font-thin text-center my-4">-----END CERTIFICATE-----</div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Page;