import { Locator, Page } from "playwright";



export interface Patientinformationint 
{
    readonly page: Page;
    readonly back: Locator;
    readonly cancel: Locator;
    readonly next: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly date: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly email: Locator;
    readonly termsandconditionscheckbox: Locator;
    readonly phonenumber: Locator;

    enterFirstName(fname:String): void;
    enterLastName(lname :String): void;
    enterDob(mm:String, dd:String, yy:String) :void ;
    clickTCCheckBox() :void;
    enterPhonenumber(phnumber:String): void;
    moveback():void;
    moveNext():void;
    clickCancel():void;
    


}
  