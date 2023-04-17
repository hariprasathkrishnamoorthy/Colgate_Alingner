import { Locator, Page } from "playwright";



export interface Clinicalinformationint 
{
    readonly page: Page;
    readonly yes: Locator;
    readonly no: Locator;
    readonly checkbox: Locator;
    readonly notes : Locator;
    readonly back: Locator;
    readonly cancel: Locator;
    readonly next: Locator;

    enterYes(): void;
    enterNo(): void;
    checkAllApplies(checker:String) :void ;
    enterNotes(notes:String):void ;
    moveback():void;
    moveNext():void;
    clickCancel():void;

}
  