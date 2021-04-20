


export function openCamera(){
    console.log("openCamera")
    // Call to Android App
    if (window.nativeApp) window.nativeApp.funnelReady();
    //Call to  IOS App
    else if ((window['webkit']) && ( window['webkit'].messageHandlers) && (( window['webkit'].messageHandlers.nativeApp))) window['webkit'].messageHandlers.nativeApp.postMessage({"openCamera": {}});

}
