import { Locator, Page } from "playwright";



export interface Scansint 
{
    readonly page: Page;
    
    readonly uploadupperscan: Locator;
    readonly uploadlowerscan : Locator;

    readonly back: Locator;
    readonly cancel: Locator;
    readonly next: Locator;

    uploadUpperScan(): void;
    uploadLowerScan(): void;
    
    moveback():void;
    moveNext():void;
    clickCancel():void;

}
  