import { chromeLauncher } from "chrome-launcher";
import { lighthouse } from "lighthouse";

// Sample URL to audit
const url = "https://www.example.com";

// Launch Chrome using chrome-launcher
chromeLauncher.launch().then(async (chrome) => {
  const opts = {
    port: chrome.port,
  };

  try {
    // Run Lighthouse on the URL
    const { lhr } = await lighthouse(url, opts);

    // Print report to the console
    console.log(`Lighthouse score for ${url}:`);
    console.log(`Performance: ${lhr.categories.performance.score * 100}`);
    console.log(`Accessibility: ${lhr.categories.accessibility.score * 100}`);
    console.log(
      `Best Practices: ${lhr.categories["best-practices"].score * 100}`
    );
    console.log(`SEO: ${lhr.categories.seo.score * 100}`);
  } catch (error) {
    console.error(error);
  } finally {
    // End Chrome instance
    await chrome.kill();
  }
});
