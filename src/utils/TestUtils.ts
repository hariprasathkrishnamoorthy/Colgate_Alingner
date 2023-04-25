import { Page } from "playwright";
import { test } from "@playwright/test";
import  logger from "../utils/logger";
import  winston from 'winston';

export class TestUtils
{
   static async getOrderid(url :string):Promise<string>
  {
     const parts = url.split("/");
     const value = parts[parts.length - 1];
     return value;
  }

  static async waitforLoad(page :Page): Promise<void>
  {
    await page.waitForLoadState("domcontentloaded");
    await page.waitForLoadState("networkidle");
    await page.waitForLoadState();
  }

  static async waitForTimeout(page :Page,val :number): Promise<void>
  {
    await page.waitForTimeout(val);
  }

  static async log(header :string, message: string) : Promise<void>
  {
   logger.info("*******"+header+":"+message+"*********");
   console.log("*******"+header+":"+message+"*********");
   test.info().annotations.push({ type: header, description: message });
  }


}