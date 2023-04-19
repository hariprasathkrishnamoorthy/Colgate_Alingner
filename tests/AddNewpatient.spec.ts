import { chromium, expect, test } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {Patients} from "../src/pages/Patients";
import {Patientinformation} from "../src/pages/Patientinformation";
import {Clinicalinformation} from "../src/pages/Clinicalinformation";
import {Scans} from "../src/pages/Scans";
import {RadiographandPhoto} from "../src/pages/RadiographandPhoto";
import {TreatandPreparePlan} from "../src/pages/TreatandPreparePlan"



test("Verify New Patient Treatment Plan Creation and Order Confirmation ", async ({ request }, testResult) => {
  
  test.setTimeout(2000000);
  const browser = await chromium.launch({
    args: [ '--disable-site-isolation-trials', '--disable-web-security', '--allow-running-insecure-content'],
    headless: false,
  });

  const context = await browser.newContext({
    acceptDownloads: true,
  });

  const page = await context.newPage();
  await page.goto("https://qa.oemaligner.com/#/login");

  //Login Page
  const login_page = new LoginPage(page);
  await login_page.enterEmail("copa_contact@mailinator.com");
  await login_page.enterPassWord("uLab12#");
  await login_page.clickLogin();

  //Patients Page
  const Patients_page = new Patients(page);
  await Patients_page.addNewPatient();

   //Patients Information Page
  const Patientsinformation_page = new Patientinformation(page);
  await Patientsinformation_page.enterFirstName("Test");
  await Patientsinformation_page.enterLastName("DemoPatient");
  await Patientsinformation_page.enterDob("1","1","1990");
  await Patientsinformation_page.enterEmail("TestpatientDemo@gmail.com");
  await Patientsinformation_page.moveNext();

  //Clinical Information Page
  const Clinicalinfo_page = new Clinicalinformation(page);
  await Clinicalinfo_page.enterNo();
  await Clinicalinfo_page.moveNext();

  //Scan Page
  const Scan_page = new Scans(page);
  await Scan_page.uploadUpperScan();
  await Scan_page.uploadLowerScan();
  await page.waitForLoadState();
  await Scan_page.moveNext();

  //RadioPhoto Page
  const RadioandPhoto_page = new RadiographandPhoto(page);
  await RadioandPhoto_page.uploadPanorex();
  await RadioandPhoto_page.moveNext();


  //TreatmentPlan and Prep Page
  const TreatandPreparePlan_page = new TreatandPreparePlan(page);
  //await page.reload();
  await TreatandPreparePlan_page.validateResultModal();
  //expect(TreatandPreparePlan_page.validateTreatmentCompletedStep()).toBe(true);
  await  TreatandPreparePlan_page.clickViewresults();


  //Order Page
  await page.getByTestId('goToCart').press('Enter');
  await page.waitForLoadState();
  await page.getByTestId('consent1').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent2').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent3').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent4').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByRole('button', { name: 'Place order' }).click();
  await page.waitForLoadState();
  await expect( await page.locator("//button[contains(text(),'Close')]").isVisible()).toBe(true);
  await page.getByRole('button', { name: 'Close' }).click();

});


