import * as React from "react";

interface IModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ closeModal }: IModalProps) => {

    const [activeNow, setActiveNow] = React.useState('');

  return (
    <div className="modal bg-white">
      <div className="modal-header bg-white">
        <p
          onClick={() => {
            closeModal(false);
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" className="close-icon" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58434 6.99901L0.875873 11.7079L2.29003 13.1221L6.99849 8.41328L11.707 13.1221L13.1211 11.7079L8.41265 6.99901L13.704 1.7072L12.2899 0.292927L6.99849 5.58474L1.70712 0.292932L0.292969 1.7072L5.58434 6.99901Z" fill="gray">
            </path>
        </svg>

        </p>
      </div>
      <div className="modal-body">
      

  

<div className="inset-x-0 top-0 -z-10 bg-white">
      
    <div className="flex flex-wrap w-full">

        <div className="flex flex-col flex-wrap w-full md:w-6/12 gap-x-6 gap-y-1 p-2 bg-green-5000">

          <div className="flex w-full border-b border-fortem1green-700 justify-center">
            <div className="bg-green-7000 font-semibold text-lg text-fortem1green-900">
                Para Você
            </div>
          </div>

          <div className="group relative flex gap-x-6 rounded-lg p-4 mt-6 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-fortem1green-900" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <a href="/tokens" >
                Compre Tokens
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Conheça nosso marketplace</p>
            </div>
          </div>

          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-fortem1green-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </div>
            <div>
              <a href="#">
                Porque investir em Tokens
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Invista nos tokens com os melhores rendimentos e a segurança do blockchain</p>
            </div>
          </div>
      
        </div>

        <div className="flex flex-col flex-wrap w-full md:w-6/12 gap-x-6 gap-y-1 p-2 bg-green-5000">

          <div className="flex w-full border-b border-fortem1green-700 justify-center">
            <div className="bg-green-7000 font-semibold text-lg text-fortem1green-900">
                Para seu negócio
            </div>
          </div>

          <div className="group relative flex gap-x-6 rounded-lg p-4 mt-6 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-fortem1green-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <div>
              <a href="#"  text-gray-600>
                Tokenize seu ativo
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Conheça nossa plataforma de tokenização</p>
            </div>
          </div>

          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg className="h-6 w-6 text-gray-600 group-hover:text-fortem1green-700" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div>
              <a href="#">
                Vantagens de tokenizar
                <span className="absolute inset-0"></span>
              </a>
              <p className="mt-1 text-gray-600">Antecipe seus recebíveis ou obtenha crédito rápido e simplificado, com as melhores taxas, tokenizando seus serviços</p>
            </div>
          </div>
        
        </div>

    </div> 

    <div className="flex flex-wrap w-full">
      <div className="flex flex-row h-full w-full items-center self-center px-6 bg-gray-50">
        <div className="relative flex w-full">
          <div className="flex w-4/12 justify-center hover:bg-gray-100">
              <a href="#" className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
              </svg>
              Watch demo
              </a>                  
          </div>    
          <div className="flex w-4/12 justify-center hover:bg-gray-100">
              <a href="#" className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
              </svg>
              Contact sales
              </a>
          </div>    
          <div className="flex w-4/12 justify-center hover:bg-gray-100">    
              <a href="#" className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
              <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
              </svg>
              View all Exchanges
              </a>
          </div>    
        </div>
      </div>
    </div>  

    {/* <div className="flex flex-col w-full bg-gray-50 py-6 px-8">
        <div className="flex items-center gap-x-3">
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
          <p className="rounded-full bg-indigo-600/10 py-1.5 px-2.5 text-xs font-semibold text-indigo-600">New</p>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">Empower your entire team with even more advanced tools.</p>
    </div> */}

</div>
</div>

      </div>
  
  );
};