package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends Page {

    private final By flightButton = By.className("login");

    private final By searchBox = By.id("search_query_top");
    private final By submitSearch = By.name("submit_search");
    private final By toSummary = By.xpath("//a[contains(@title,'View my shopping cart')]");
    private final By accountName = By.xpath("//a[contains(@title,'View my customer account')]");

    public HomePage(WebDriver driver) {
        super(driver);
    }

    public AuthenticationPage clickSingIn() {
        driver.findElement(flightButton).click();

        return new AuthenticationPage(driver);
    }

    public ResultsPage searchFor(String target) {
        driver.findElement(searchBox).sendKeys(target);
        driver.findElement(submitSearch).click();

        return new ResultsPage(driver);
    }

    public SummaryPage goToSummary() {
        driver.findElement(toSummary).click();

        return new SummaryPage(driver);
    }

    public String getLoginAccountName() {
        return driver.findElement(this.accountName).getText();
    }
}