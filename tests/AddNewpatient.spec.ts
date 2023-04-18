import { chromium, expect, test } from "@playwright/test";
import {LoginPage} from "../src/pages/LoginPage";
import {Patients} from "../src/pages/Patients";
import {Patientinformation} from "../src/pages/Patientinformation";
import {Clinicalinformation} from "../src/pages/Clinicalinformation";
import {Scans} from "../src/pages/Scans";
import {RadiographandPhoto} from "../src/pages/RadiographandPhoto";



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
  await page.waitForLoadState();
  await Scan_page.moveNext();

  const RadioandPhoto_page = new RadiographandPhoto(page);
  await RadioandPhoto_page.uploadPanorex();
  await RadioandPhoto_page.moveNext();


  //treatment-plan and prep page
  await page.waitForSelector('.MuiBackdrop-root', { timeout: 200000});
  await expect(await page.getByText('The treatment has completed. This is a simple case.').isVisible()).toBe(true);
  await page.getByRole('button', { name: 'View results' }).click();


  //order page
  await page.getByTestId('goToCart').press('Enter');
  await page.waitForLoadState();
  await page.getByTestId('consent1').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent2').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent3').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByTestId('consent4').getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByRole('button', { name: 'Place order' }).click();
  
  await page.waitForLoadState();
  await expect( await page.getByText('Order confirmed').isVisible()).toBe(true);
  await page.getByRole('button', { name: 'Close' }).click();

});


