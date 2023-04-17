import { chromium, expect, test } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {Patients} from "../src/pages/Patients";
import {Patientinformation} from "../src/pages/Patientinformation";
import {Clinicalinformation} from "../src/pages/Clinicalinformation";
import {Scans} from "../src/pages/Scans";
import {RadiographandPhoto} from "../src/pages/RadiographandPhoto";



test("Verify New Patient Treatment Plan Creation and Order Confirmation ", async ({ page,request }, testResult) => {
  
  test.setTimeout(1420000);
  await page.goto("https://qa.oemaligner.com/#/login");

  const login_page = new LoginPage(page);
  await login_page.enterEmail("copa_contact@mailinator.com");
  await login_page.enterPassWord("uLab12#");
  await login_page.clickLogin();

  const Patients_page = new Patients(page);
  await Patients_page.addNewPatient();

  const Patientsinformation_page = new Patientinformation(page);
  await Patientsinformation_page.enterFirstName("Test");
  await Patientsinformation_page.enterLastName("DemoPatient");
  await Patientsinformation_page.enterDob("1","1","1990");
  await Patientsinformation_page.enterEmail("TestpatientDemo@gmail.com");
  await Patientsinformation_page.moveNext();


  const Clinicalinfo_page = new Clinicalinformation(page);
  await Clinicalinfo_page.enterNo();
  await Clinicalinfo_page.moveNext();


  const Scan_page = new Scans(page);
  await Scan_page.uploadUpperScan();
  await Scan_page.uploadLowerScan();
  //await page.waitForSelector("//*[contains(text(),'Ok, got it!')]", { timeout: 5000 });
  //await page.locator("//*[contains(text(),'Ok, got it!')]").click({force:true, delay:15000});
  await page.waitForLoadState();
  await Scan_page.moveNext();

  const RadioandPhoto_page = new RadiographandPhoto(page);
  await RadioandPhoto_page.uploadPanorex();
  await RadioandPhoto_page.moveNext();


 




});


