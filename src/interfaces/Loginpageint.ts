import { Locator, Page } from "playwright";



 export interface Loginpageint 
{
    readonly page: Page;
    readonly email: Locator;
    readonly pwd: Locator;

    enterEmail(email: String): void;
    enterPassWord(pwd :String): void;
    clickLogin(): void;


}
  
  
  