<script>
import DesktopScreen                            from '$lib/web/assets/desktop-monitor-screen-1088x829.png';
import Fortem1Screen                            from '$lib/web/assets/Fortem1_screen.png';    
import { isMobileDeviceS, isMobileDeviceM }     from '$lib/stores/storeDevice';
</script>


    <svg class="absolute opacity-30 inset-x-0 top-0 -ml-44 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
        <defs>
            <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
            </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
    </svg>    

    <div class="flex flex-wrap w-full">
        <div class="flex flex-wrap w-full justify-center xl:w-4/12 lg:justify-start lg:px-12">
            <div class="shrink-0 self-center">

                <!-- <div class=" place-items-center h-screen"> -->
                    <h1 class=" text-8xl
                                    font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fortem1green-500 via-fortem1neutral-300 to-fortem1orange-900">
                        Fortem One
                    </h1>
                    <h1 class="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-fortem1green-500 via-fortem1neutral-300 to-fortem1orange-900">
                        construido para cuidar de seu patriminio digital
                    </h1>                        
                    <!-- </div> -->
                    
            </div>
        </div>

        <div class="flex w-full justify-center xl:w-8/12 lg:justify-end lg:px-12">
            {#if $isMobileDeviceS == true && $isMobileDeviceM == true}
            <div class="computer-empty computer-empty-sm shrink-0">        
                <div class="computer-screen computer-screen-sm">
                    <div class="screen-landing-sm">
                        <img src={Fortem1Screen} alt="" class="">
                    </div>
                </div>
                <img class="computer" src={DesktopScreen} alt="computer">
            </div>
            {/if}
    
            {#if $isMobileDeviceS == false && $isMobileDeviceM == true }
            <div class="computer-empty computer-empty-md shrink-0">
                <div class="computer-screen computer-screen-md">
                    <div class="screen-landing-md">
                        <img src={Fortem1Screen} alt="" class="">
                    </div>
                </div>
                <img class="computer" src={DesktopScreen} alt="computer">
            </div>
            {/if}
    
    
            {#if ( $isMobileDeviceS == false ) && ( $isMobileDeviceM == false )  }
            <div class="computer-empty computer-empty-lg shrink-0">
                <div class="computer-screen computer-screen-lg">
                    <div class="screen-landing-lg">
                        <img src={Fortem1Screen} alt="" class="">
                    </div>
                </div>
                <img class="computer" src={DesktopScreen} alt="computer">
            </div>
            {/if}
        </div>
    </div>    


<style>
.computer-empty {
    overflow: hidden;
    position: relative;
    height: 100%;
}
.computer-empty-lg {
    width: 650px!important;
}
.computer-empty-md {
    width: 486px!important; 
}
.computer-empty-sm {
    width: 280px!important;
}


.computer-screen {
    overflow: hidden;
    position: absolute;
}
.computer-screen-md {
    height: 247px;
    width: 445px;
    left: 21px;
    top: 22px;
}
.computer-screen-lg {
    height: 337px;
    width: 600px;
    left: 26px;
    top: 26px;
}
.computer-screen-sm {
    height: 150px;
    width: 260px;
    left: 10px;
    top: 10px;
}


.screen-landing-sm {
    left: 0;
    line-height: 0;
    position: absolute;
    width: 100%;
    transition: all 6s;
    -o-transition: all 6s;
    -ms-transition: all 6s;
    -moz-transition: all 6s;
    -webkit-transition: all 6s;
}
.screen-landing-md {
    left: 0;
    line-height: 0;
    position: absolute;
    width: 100%;
    transition: all 6s;
    -o-transition: all 6s;
    -ms-transition: all 6s;
    -moz-transition: all 6s;
    -webkit-transition: all 6s;
}
.screen-landing-lg {
    left: 0;
    line-height: 0;
    position: absolute;
    width: 100%;
    transition: all 6s;
    -o-transition: all 6s;
    -ms-transition: all 6s;
    -moz-transition: all 6s;
    -webkit-transition: all 6s;
}
.screen-landing-sm:hover {
    cursor: pointer;
    margin-top: -220px;
}

.screen-landing-md:hover {
    cursor: pointer;
    margin-top: -386px;
}

.screen-landing-lg:hover {
    cursor: pointer;
    margin-top: -520px;
}



img {
    max-width: 100%;
    width: auto\9;
    height: auto; 
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}

.computer-empty img.computer {
    width: 100%;
}
</style>