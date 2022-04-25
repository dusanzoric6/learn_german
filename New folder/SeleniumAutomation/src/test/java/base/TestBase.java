package base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import pages.HomePage;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TestBase {

    protected WebDriver driver;
    protected HomePage homePage;

    protected static String ACCOUNT_EMAIL;
    protected static String ACCOUNT_PASSWORD;
    private Properties properties;

    {
        ACCOUNT_EMAIL = getConfigProperty("account.email");
        ACCOUNT_PASSWORD = getConfigProperty("account.password");
    }

    @BeforeMethod
    public void setUp() {

        System.setProperty("webdriver.chrome.driver", "resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();

        homePage = new HomePage(driver);
    }

    @AfterMethod
    public void tearDown() {
        driver.quit();
    }

    private String getConfigProperty(String property) {
        if (properties == null) {
            properties = new Properties();
            try (InputStream input = new FileInputStream("src/test/resources/config.properties")) {
                properties.load(input);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return properties.getProperty(property);
    }
}
