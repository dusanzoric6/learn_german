package pages;

import helper.Waits;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class ResultsPage extends Page{

    private final By firstItem = By.className("first-in-line");
    private final By addToCartButton = By.className("ajax_add_to_cart_button");
    private final By checkoutButton = By.xpath("//span[contains(@title,'Continue shopping')]");
    private final By headerLogo = By.id("header_logo");

    public ResultsPage(WebDriver driver) {
        super(driver);
    }

    public HomePage addFirstItemToCart() {
        Actions action = new Actions(driver);
        WebElement firstItem = driver.findElement(this.firstItem);
        action.moveToElement(firstItem).moveToElement(driver.findElement(addToCartButton)).click().build().perform();

        Waits.waitUntilElementIsClickable(driver.findElement(this.checkoutButton), driver).click();
        driver.findElement(this.headerLogo).click();

        return new HomePage(driver);
    }
}
