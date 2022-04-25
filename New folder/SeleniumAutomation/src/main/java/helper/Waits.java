package helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Waits {

    public static WebElement waitUntilElementIsClickable(WebElement element, WebDriver driver) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(element));
        return element;
    }

    public static void wait(int milliseconds, WebDriver driver) {
        synchronized (driver) {
            try {
                driver.wait(milliseconds);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
