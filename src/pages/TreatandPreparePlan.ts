import { Locator, Page, expect } from "@playwright/test";
import { TreatandPreparePlanint } from "../interfaces/TreatandPreparePlanint";


export class TreatandPreparePlan implements TreatandPreparePlanint

{
    page: Page;
    ResultBackdropModal: string;
    viewresults: Locator;
    tretmentcompleted:Locator;
    
    constructor(page: Page) 
    {
       this.page = page;
       this.viewresults=page.getByRole('button', { name: 'View results' });
       this.ResultBackdropModal= '.MuiBackdrop-root';
       this.tretmentcompleted=page.getByText('The treatment has completed. This is a simple case.');

    }
    async clickViewresults(): Promise<void>  
    {
    
    await this.viewresults.click();
  
    }


    async validateResultModal(): Promise<void>  
    {
    
    await this.page.waitForSelector(this.ResultBackdropModal, { timeout: 900000, state: 'visible' });
    console.log(`Selector ${this.ResultBackdropModal} has appeared.`)
    }

    async validateTreatmentCompletedStep(): Promise<boolean>  
    {
    
     await this.page.waitForSelector(this.ResultBackdropModal, { timeout: 800000});
     return (await this.tretmentcompleted.isVisible());
  
    }


   
    
    
    
    
}