<script>

    import { toogleMenuNavItemPay } from '$lib/stores/menuActiveItem';
    import UIlogoEcoPay             from '$lib/web/assets/UIlogoEcoPay.svelte';
  
    
    </script>
        
  <div class="relative isolate z-30 shadow">
    <div class="absolute inset-x-0 top-0 -z-10 bg-white pt-2 shadow-lg ring-1 ring-gray-900/5 bg-red-3000">


        <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-700">
            <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <a href="#" class="font-semibold text-gray-900">
                Compre Tokens
                <span class="absolute inset-0"></span>
              </a>
              <p class="mt-1 text-gray-600">Connect with third-party tools and find out expectations</p>
            </div>
        </div>

        <div class="flex flex-row flex-wrap gap-y-10 gap-x-8 py-8 px-6 lg:px-8">   
          



            <div class="flex flex-wrap w-full">
  



                <div class="flex flex-col h-full w-1/3 items-center self-center px-6 bg-green-5000">
                    <div class="flex w-full border-b-2 border-fortem1green-700 justify-center">
                        <div class="bg-green-7000 font-semibold text-lg">
                            Para Voce
                        </div>
                    </div> 
                    <div class="w-full grow bg-green-7000">  

                        <div class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                            </div>
                            <div>
                                <a href="#" class="font-semibold text-gray-900">
                                    Corretora
                                    <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <!-- <p class="mt-1 text-gray-600">Speak directly to your customers with our engagement tool</p> -->
                        <a href="#" class="font-semibold self-start text-gray-9000">
                            Tokenizadora
                            <span class="absolute inset-0"></span>
                        </a>
                    </div>              
                </div>  
    

                <div class="flex flex-col h-full w-1/3 items-center self-center px-6 bg-green-500">
                    <div class="flex w-full border-b-2 border-fortem1green-700 justify-center">
                        <div class="bg-green-7000 font-semibold text-lg">
                            Para seu negocio
                        </div>
                    </div> 
                    <div class="w-full grow bg-green-700">  

                        <div class="group relative -mx-3 flex gap-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50 sm:flex-col sm:p-6">
                            <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                            </div>
                            <div>
                                <a href="#" class="font-semibold text-gray-900">
                                    Corretora
                                    <span class="absolute inset-0"></span>
                                </a>
                                <p class="mt-1 text-gray-600">Get a better understanding of where your traffic is coming from</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="#" class="font-semibold text-gray-9000">
                            Tokenizadora
                            <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">Speak directly to your customers with our engagement tool</p>
                    </div>              
                </div>  


                <div class="flex flex-col h-full w-1/3 items-center self-center px-6 bg-green-500">
                    <div class="bg-green-700">
                        Tokenizadora
                    </div> 
                    <div class="w-full grow bg-green-700">  

                        <div class="flex flex-col justify-start items-center h-full bg-yellow-700">
                            <UIlogoEcoPay />
                            <div>skldjlsaj</div>
                        </div>
                    </div>
                    <div>
                        <a href="#" class="font-semibold text-gray-9000">
                            Tokenizadora
                            <span class="absolute inset-0"></span>
                        </a>
                        <p class="mt-1 text-gray-600">Speak directly to your customers with our engagement tool</p>
                    </div>              
                </div>  
            
            </div>
  
        
          <!-- <div class="flex flex-col w-10-12 items-center gap-x-4">
            <p class="mt-2 text-base leading-6 text-gray-600">Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.</p>
            <h4 class="mt-2 text-sm font-semibold leading-6 text-gray-900">
  
              <a href="#" class="flex-none rounded-full bg-fortem1green-700 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">conheca um novo jeito de pagar</a>
            </h4>
          </div> -->
    
        </div>

        <div class="flex flex-wrap w-full">

            <div class="flex flex-row h-full w-full items-center self-center px-6 bg-gray-50">
                <div class="relative flex w-full">
                    <div class="flex w-4/12 justify-center hover:bg-gray-100">

                        <a href="#" class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
                        </svg>
                        Watch demo
                        </a>
                    
                    </div>    
                    <div class="flex w-4/12 justify-center hover:bg-gray-100">
                        <a href="#" class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
                        </svg>
                        Contact sales
                        </a>
                    </div>    
                    <div class="flex w-4/12 justify-center hover:bg-gray-100">    
                        <a href="#" class="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0">
                        <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2.5 3A1.5 1.5 0 001 4.5v4A1.5 1.5 0 002.5 10h6A1.5 1.5 0 0010 8.5v-4A1.5 1.5 0 008.5 3h-6zm11 2A1.5 1.5 0 0012 6.5v7a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0017.5 5h-4zm-10 7A1.5 1.5 0 002 13.5v2A1.5 1.5 0 003.5 17h6a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 009.5 12h-6z" clip-rule="evenodd" />
                        </svg>
                        View all Exchanges
                        </a>
                    </div>    
                </div>
            </div>
        </div>  

        <div class="bg-gray-50 py-6 px-8">
            <div class="flex items-center gap-x-3">
              <h3 class="text-sm font-semibold leading-6 text-gray-900">Enterprise</h3>
              <p class="rounded-full bg-indigo-600/10 py-1.5 px-2.5 text-xs font-semibold text-indigo-600">New</p>
            </div>
            <p class="mt-2 text-sm leading-6 text-gray-600">Empower your entire team with even more advanced tools.</p>
        </div>


    </div>
  </div>