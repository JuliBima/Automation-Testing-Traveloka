const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
let { getFormattedDateAfterDays } = require("./utility");

async function runTest() {
  let options = new chrome.Options();
  options.addArguments("--start-maximized");

  // Config Chrome
  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  try {
    await driver.get("https://www.traveloka.com/");

    let homeHotel = await driver.wait(until.elementLocated(By.xpath("//div[@data-testid = 'product-pill-Car Rental']")), 1000);
    await homeHotel.click();
    await driver.sleep(1000);

    const cityValue = "Jakarta";
    let firstElementCity;

    let inputLokasiRental = await driver.wait(until.elementLocated(By.xpath("//input[@data-testid='rental-search-form-location-input']")), 5000);
    await driver.wait(until.elementIsVisible(inputLokasiRental), 1000);
    await inputLokasiRental.sendKeys(cityValue);
    await driver.sleep(1000);

    let selectCity = await driver.findElements(By.xpath("//h3[@data-testid='rental-search-form-location-item-title' and .//span[text()='Jakarta']]"));
    if (selectCity.length > 0) {
      firstElementCity = selectCity[0];
      console.log(await firstElementCity.getText());
    }
    await firstElementCity.click();
    await driver.sleep(1000);

    let clickStartDate = await driver.wait(until.elementLocated(By.xpath(`//input[@data-testid="rental-search-form-date-input-start"]`)), 1000);
    await clickStartDate.click();
    await driver.sleep(1000);

    const startDateTime = getFormattedDateAfterDays(2);
    console.log(startDateTime);
    let selectStartDate = await driver.wait(until.elementLocated(By.xpath(`//div[@data-testid="date-cell-${startDateTime}"]`)), 1000);
    await selectStartDate.click();
    await driver.sleep(1000);

    let clickStartTime = await driver.wait(until.elementLocated(By.xpath(`//input[@data-testid="rental-search-form-time-input-start"]`)), 1000);
    await clickStartTime.click();
    await driver.sleep(1000);

    let clickEndDate = await driver.wait(until.elementLocated(By.xpath(`//input[@data-testid="rental-search-form-date-input-end"]`)), 1000);
    await clickEndDate.click();
    await driver.sleep(1000);

    const endDateTime = getFormattedDateAfterDays(5);
    console.log(endDateTime);
    let selectEndDate = await driver.wait(until.elementLocated(By.xpath(`(//div[@data-testid="date-cell-${endDateTime}"])[2]`)), 1000);
    await selectEndDate.click();
    await driver.sleep(1000);

    let clickSearch = await driver.wait(until.elementLocated(By.xpath("//div[@data-testid = 'rental-search-form-cta']")), 1000);
    await clickSearch.click();
    await driver.sleep(5000);

    //Halaman Berikutnya 1
    let selectCar = await driver.findElement(By.xpath('(//div[contains(text(), "Continue")])[2]'));
    await selectCar.click();
    await driver.sleep(5000);

    //Halaman Provider
    let selectCarProvider = await driver.findElement(By.xpath('(//div[contains(text(), "Continue")])[2]'));
    await selectCarProvider.click();
    await driver.sleep(5000);

    await driver.executeScript("window.scrollBy(0, document.body.scrollHeight * 50);");

    //halaman Car rental
    // pick up location
    let selectCarRental = await driver.findElement(By.xpath('//div[contains(text(), "Rental Office")]'));
    await selectCarRental.click();
    await driver.sleep(5000);

    let selectCarRentalImg = await driver.findElement(By.xpath('//img[@src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f3ac954ccf57929e5b4f2519406ebb82.svg"]'));
    await selectCarRentalImg.click();
    await driver.sleep(1000);

    let selectCarRentalLocation = await driver.findElement(By.xpath('(//div[not(@aria-disabled) and contains(text(), "Pool")])[2]'));
    await selectCarRentalLocation.click();
    await driver.sleep(1000);

    // drop-off location
    let selectCarDropLocation = await driver.findElement(By.xpath('(//div[contains(text(), "Other Locations")])[2]'));
    await selectCarDropLocation.click();
    await driver.sleep(1000);

    const locationValue = "National Monument";
    let inputCarDropOtherLocation = await driver.wait(until.elementLocated(By.xpath("(//input[@placeholder='Search location or address'])[2]")), 5000);
    await driver.wait(until.elementIsVisible(inputCarDropOtherLocation), 1000);
    await inputCarDropOtherLocation.sendKeys(locationValue);
    await driver.sleep(5000);

    let selectCarDropOtherLocation = await driver.findElements(By.xpath("//div[@aria-label='National Monument ']"));
    let firstElement;
    if (selectCarDropOtherLocation.length > 0) {
      firstElement = selectCarDropOtherLocation[0];
      console.log(await firstElement.getText());
    }

    await firstElement.click();
    await driver.sleep(1000);

    let clickContinueCarRental = await driver.findElement(By.xpath('(//div[contains(text(), "Continue")])[2]'));
    await clickContinueCarRental.click();
    await driver.sleep(10000);

    // Book
    const fullName = "Juli Bima Ardika";
    const phoneNumber = "82213666563";
    const email = "julibima45@gmail.com";
    let inputFullnameContact = await driver.wait(until.elementLocated(By.xpath("(//input[@aria-labelledby='name.full'])[1]")), 5000);
    await driver.wait(until.elementIsVisible(inputFullnameContact), 1000);
    await inputFullnameContact.sendKeys(fullName);
    await driver.sleep(1000);

    let inputPhoneContact = await driver.wait(until.elementLocated(By.xpath("(//input[@aria-label='Phone Number'])[1]")), 5000);
    await driver.wait(until.elementIsVisible(inputPhoneContact), 1000);
    await inputPhoneContact.sendKeys(phoneNumber);
    await driver.sleep(1000);

    let inputemailContact = await driver.wait(until.elementLocated(By.xpath("//input[@aria-labelledby='emailAddress']")), 5000);
    await driver.wait(until.elementIsVisible(inputemailContact), 1000);
    await inputemailContact.sendKeys(email);
    await driver.sleep(1000);

    let clickTitle = await driver.findElement(By.xpath(`//div[@aria-labelledby='title']//select`));
    await clickTitle.click();
    await driver.sleep(1000);

    let selectTitle = await driver.findElement(By.xpath(`//select/option[@value="MR"]`));
    await selectTitle.click();
    await driver.sleep(1000);

    let inputFullnameDriver = await driver.wait(until.elementLocated(By.xpath("(//input[@aria-labelledby='name.full'])[2]")), 5000);
    await driver.wait(until.elementIsVisible(inputFullnameDriver), 1000);
    await inputFullnameDriver.sendKeys(fullName);
    await driver.sleep(1000);

    let inputPhoneDriver = await driver.wait(until.elementLocated(By.xpath("(//input[@aria-label='Phone Number'])[2]")), 5000);
    await driver.wait(until.elementIsVisible(inputPhoneDriver), 1000);
    await inputPhoneDriver.sendKeys(phoneNumber);
    await driver.sleep(1000);

    let clickContinueBook = await driver.findElement(By.xpath('(//div[contains(text(), "Continue")])[1]'));
    await clickContinueBook.click();
    await driver.sleep(10000);

    // REVIEW
    let clickRentalRequest = await driver.findElement(By.xpath('//div[contains(text(), "Tap to check the requirements.")]'));
    await clickRentalRequest.click();
    await driver.sleep(1000);

    let clickAllRequest = await driver.findElement(By.xpath(`//div[contains(text(), 'Check All')]`));
    await clickAllRequest.click();
    await driver.sleep(1000);

    let clickSaveAllRequest = await driver.findElement(By.xpath(`(//div[contains(text(), 'Save')])[2]`));
    await clickSaveAllRequest.click();
    await driver.sleep(1000);

    let goToPayMent = await driver.findElement(By.xpath('(//div[contains(text(), "Continue")])[1]'));
    await goToPayMent.click();
    await driver.sleep(10000);
  } finally {
    // Tutup
    await driver.quit();
  }
}

runTest();
