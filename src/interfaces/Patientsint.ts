import { Locator, Page } from "playwright";



export interface Patientsint 
{
    readonly page: Page;
    readonly addanewpatientbutton: Locator;
    readonly dropdownaccount: Locator;
    readonly myaccount: Locator;
    readonly changepassword: Locator;
    readonly logout: Locator;

    addNewPatient(): void;
    enterSearch(text :String): void;

}
  