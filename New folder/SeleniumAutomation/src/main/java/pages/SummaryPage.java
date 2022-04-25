package pages;

import helper.Waits;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SummaryPage extends Page {

    private final By addToCartButton = By.className("standard-checkout");
    private final By deleteButtons = By.xpath("//a[contains(@title,'Delete')]");
    private final By itemsCount = By.className("ajax_cart_quantity");

    public SummaryPage(WebDriver driver) {
        super(driver);
    }

    public void removeFirstItemFromCart() {
        WebElement firstItemDelete = driver.findElements(this.deleteButtons).get(0);
        firstItemDelete.click();
    }

    public AddressPage proceedToCheckout() {
        driver.findElement(this.addToCartButton).click();
        return new AddressPage(driver);
    }

    public int getItemsCount() {
        Waits.wait(3000, driver); // cart count is not updated immediately
        return Integer.parseInt(driver.findElement(this.itemsCount).getText());
    }
}
