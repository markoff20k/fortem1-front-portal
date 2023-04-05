<script>
import UIiconFortem                from '$lib/web/assets/UIiconFortem.svelte';
import UIiconCheckBadge            from '$lib/web/assets/UIiconCheckBadge.svelte';
</script>

    <div class="w-72 rounded-2xl bg-gradient-to-r from-fortem1green-700 via-fortem1high-green to-fortem1high-orange p-1 shadow-xl">
        <div class="block rounded-xl bg-white">
            <div class="bg-black rounded-t-xl h-20 p-4">
                <a href="#" class="flex-none rounded-full bg-fortem1green-700 py-1 px-3.5 text-sm font-semibold text-fortem1neutral-900 shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">captacao</a>
            </div>
            <div class="flex flex-row flex-wrap">
                <div class="w-4/12">
                    <div class="flex flex-row w-full justify-center rounded-b-xl w-10 -mt-6">
                            <div class="rounded-md bg-black p-2 ring-2 ring-white">
                                <UIiconFortem customWidth={35} customHeight={35}/>
                            </div>
                    </div>    
                </div>
                <div class="w-8/12">
                    <div class="flex flex-row flex-wrap items-center gap-x-2">
                        <div>
                            Fortem One
                        </div>
                        <div>
                            <UIiconCheckBadge customWidth={20} customHeight={20}/>
                        </div>
                    </div>    
                </div>
            </div>        


            <div class="flex flex-row w-full pt-4">
                <div class="flex w-7/12 justify-start pl-2">
                    <div class="text-xl font-[800] text-fortem1typo-900">token $BTO</div>
                </div>
                <div class="flex w-5/12 justify-end pr-2">
                    <div class="text-xl font-[800] text-fortem1typo-900">R$ 25,00</div>
                </div>              
            </div>

            <div class="flex flex-row w-full pt-2">
                <div class="flex w-7/12 justify-start pl-2">
                    <div class="text-base font-bold text-neutral-600">Pgto juros mensal</div>
                </div>
                <div class="flex w-5/12 justify-end pr-2">
                    <div class="text-base font-bold text-fortem1green-900">1.52% a.m</div>
                </div>              
            </div>

            <div class="flex flex-row w-full pt-2">
                <div class="flex w-7/12 justify-start pl-2">
                    <div class="text-base font-bold text-neutral-600">Carência</div>
                </div>
                <div class="flex w-5/12 justify-end pr-2">
                    <div class="text-base font-bold text-fortem1green-900">90 dias</div>
                </div>              
            </div>

            <div class="flex flex-row w-full pt-4">
                <div class="flex w-7/12 justify-start pl-4">
                    <div class="text-base font-bold text-neutral-600">Valor Captado</div>
                </div>
                <div class="flex w-5/12 justify-end pr-4">
                    <div class="text-base font-bold text-neutral-600">Total</div>
                </div>              
            </div>

            <div class="flex flex-row w-full justify-center">
                <div class="w-10/12 bg-fortem1typo-300 rounded-xl bg-neutral-600 justify-center">
                    <div
                    class="rounded-xl bg-fortem1green-900 p-1 text-center text-xs font-bold leading-none text-fortem1neutral-300"
                    style="width: 25%">
                    25%
                    </div>
                </div>
            </div>                    

            <div class="flex flex-row w-full">
                <div class="flex w-1/2 justify-start pl-4">
                    <div class="text-base font-bold text-fortem1green-900">R$ 461.925</div>
                </div>
                <div class="flex w-1/2 justify-end pr-4">
                    <div class="text-base font-bold text-fortem1green-900">R$ 500.000</div>
                </div>              
            </div>     


            <div class="flex flex-row w-full justify-center pt-6">
                <div class="w-8/12 justify-center text-center">
                    <a href="#" class="rounded-md bg-fortem1green-900 px-3.5 py-2.5 text-base font-semibold text-fortem1neutral-300 shadow-sm hover:fortem1green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fortem1green-700">Comprar token</a>
                </div>
            </div>   

            <div class="flex flex-row w-full justify-center pt-6 pb-4">
                <a href="#" class="text-base font-semibold text-fortem1green-900 mx-4">Ver mais informações</a> 
            </div>    

        </div>
    </div>

<style>

</style>
