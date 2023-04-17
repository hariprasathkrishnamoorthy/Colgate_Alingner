import { Locator, Page } from "playwright";



export interface Radiographandphotoint 
{
    readonly page: Page;
    readonly panorex: Locator;
    readonly fullface: Locator;
    readonly Retractedsmile: Locator;
    readonly next: Locator;

    uploadPanorex(): void;
    uploadFullFace(): void;
    uploadRetractedSmile(): void;
    
    moveback():void;
    moveNext():void;
    clickCancel():void;

}
  