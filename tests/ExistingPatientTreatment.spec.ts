import { expect, test } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { Patients } from "../src/pages/Patients";
import { Patientinformation } from "../src/pages/Patientinformation";
import { Clinicalinformation } from "../src/pages/Clinicalinformation";
import { Scans } from "../src/pages/Scans";
import { RadiographandPhoto } from "../src/pages/RadiographandPhoto";
import { TreatandPreparePlan } from "../src/pages/TreatandPreparePlan"
import { OrderPage } from "../src/pages/OrderPage";
import { TestUtils } from "../src/utils/TestUtils";

test("Verify Exisiting Patient Treatment Plan Creation and Order Confirmation ", async ({ page, request }, testResult) => {

  test.setTimeout(1500000);
  await page.goto("https://qa.oemaligner.com/#/login");
  const pages: any[] = [];
  pages.push(new LoginPage(page), new Patients(page), new Patientinformation(page), new Clinicalinformation(page), new Scans(page), new RadiographandPhoto(page), new TreatandPreparePlan(page), new OrderPage(page));
  const [login_page, Patients_page, Patientsinformation_page, Clinicalinfo_page, Scan_page, RadioandPhoto_page, TreatandPreparePlan_page, Order_page] = pages;

  //Login Page
  await login_page.enterEmailPassWordandLogin("copa_contact@mailinator.com", "uLab12#");
  TestUtils.log("Login Page", "Logged-in Successfully");

  //Patients Page
  await page.getByRole('button', { name: 'Patient status' }).click();
  await page.getByTestId('prospective').getByRole('checkbox', { name: 'controlled' }).check();
  await page.locator('#status-menu div').first().click();
  await page.locator("//tbody//tr[1]").click();
  await page.getByText('View treatment plan').click();
  await page.getByTestId('fold').click({ timeout: 600000 });
  await page.locator('body').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('redo').press('Tab');
  await page.getByTestId('clearAll').press('Enter');
  await page.getByTestId('clearAll').press('Tab');
  await page.getByTestId('hide').press('Tab');
  await page.getByTestId('goToCart').press('Tab');
  await page.getByRole('checkbox', { name: 'Do not show again' }).press('Tab');
  await page.getByRole('button', { name: 'Ok, got it!' }).press('Tab');
  await page.getByRole('button', { name: 'vasanth copa_contact' }).press('Tab');
  await page.getByRole('button', { name: 'search' }).press('Tab');
  await page.getByRole('button', { name: 'Recalculate' }).press('Tab');
  await page.getByTestId('Backwards').press('Tab');
  await page.getByTestId('Play').press('Tab');
  await page.getByTestId('Forward').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('redo').press('Tab');
  await page.getByTestId('clearAll').press('Tab');
  await page.getByTestId('hide').press('Tab');
  await page.getByTestId('goToCart').press('Tab');
  await page.getByRole('checkbox', { name: 'Do not show again' }).press('Tab');
  await page.getByRole('button', { name: 'Ok, got it!' }).press('Tab');
  await page.getByRole('button', { name: 'vasanth copa_contact' }).press('Tab');
  await page.getByRole('button', { name: 'search' }).press('Tab');
  await page.getByRole('button', { name: 'Recalculate' }).press('Tab');
  await page.getByTestId('Backwards').press('Tab');
  await page.getByTestId('Play').press('Tab');
  await page.getByTestId('Forward').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('fold').click();
  await page.locator('body').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('redo').press('Tab');
  await page.getByTestId('clearAll').press('Tab');
  await page.getByTestId('hide').press('Tab');
  await page.getByTestId('goToCart').press('Tab');
  await page.getByRole('checkbox', { name: 'Do not show again' }).press('Tab');
  await page.getByRole('button', { name: 'Ok, got it!' }).press('Tab');
  await page.getByRole('button', { name: 'vasanth copa_contact' }).press('Tab');
  await page.getByRole('button', { name: 'search' }).press('Tab');
  await page.getByRole('button', { name: 'Recalculate' }).press('Tab');
  await page.getByTestId('Backwards').press('Tab');
  await page.getByTestId('Play').press('Tab');
  await page.getByTestId('Forward').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('redo').press('Tab');
  await page.getByTestId('clearAll').press('Tab');
  await page.getByTestId('hide').press('Tab');
  await page.getByTestId('goToCart').press('Tab');
  await page.getByRole('checkbox', { name: 'Do not show again' }).press('Tab');
  await page.getByRole('button', { name: 'Ok, got it!' }).press('Tab');
  await page.getByRole('button', { name: 'vasanth copa_contact' }).press('Tab');
  await page.getByRole('button', { name: 'search' }).press('Tab');
  await page.getByRole('button', { name: 'Recalculate' }).press('Tab');
  await page.getByTestId('Backwards').press('Tab');
  await page.getByTestId('Play').press('Tab');
  await page.getByTestId('Forward').press('Tab');
  await page.getByRole('slider', { name: 'Temperature' }).press('Tab');
  await page.getByTestId('treatmentViewNotes').press('Tab');
  await page.getByTestId('treatmentminus').press('Tab');
  await page.getByTestId('plus').press('Tab');
  await page.getByTestId('undo').press('Tab');
  await page.getByTestId('redo').press('Tab');
  await page.getByTestId('clearAll').press('Tab');
  await page.getByTestId('hide').press('Tab');
  await page.getByTestId('goToCart').press('Enter');

});



