import { Locator, Page } from "playwright";



export interface Logoutint 
{
    readonly page: Page;
    readonly accountdropdown: Locator;
    readonly myaccount: Locator;
    readonly changepassword: Locator;
    readonly logout: Locator;

    clickMyAccount(): void;
    clickChangePassword(): void;
    clickLogout(): void;


}
  