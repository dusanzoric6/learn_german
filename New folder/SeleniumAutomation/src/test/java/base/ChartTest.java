package base;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.*;

public class ChartTest extends TestBase {

    @Test
    public void ItemsCountTest() {

        ResultsPage resultsPage = homePage.searchFor("dress");
        homePage = resultsPage.addFirstItemToCart();

        resultsPage = homePage.searchFor("hat");
        homePage = resultsPage.addFirstItemToCart();

        resultsPage = homePage.searchFor("blouse");
        homePage = resultsPage.addFirstItemToCart();

        Assert.assertEquals(homePage.goToSummary().getItemsCount(), 3);
    }

    @Test
    public void ItemsRemovalTest() {

        ResultsPage resultsPage = homePage.searchFor("dress");
        homePage = resultsPage.addFirstItemToCart();

        resultsPage = homePage.searchFor("hat");
        homePage = resultsPage.addFirstItemToCart();

        SummaryPage summaryPage = homePage.goToSummary();
        summaryPage.removeFirstItemFromCart();

        Assert.assertEquals(summaryPage.getItemsCount(), 1);
    }

}
