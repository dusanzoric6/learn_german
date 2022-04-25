package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PaymentPage extends Page{

    private final By payByCheckButton = By.xpath("//a[contains(@title,'Pay by check.')]");
    private final By confirmMyOrderButton = By.xpath("//span[contains(text(),'I confirm my order')]");
    private final By successMessage = By.className("alert-success");

    public PaymentPage(WebDriver driver) {
        super(driver);
    }

    public void confirmMyOrder() {
        driver.findElement(this.confirmMyOrderButton).click();
    }

    public void payByCheck() {
        driver.findElement(this.payByCheckButton).click();
    }

    public String getSuccessMessage(){
        return driver.findElement(successMessage).getText();
    }
}
