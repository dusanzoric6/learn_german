package base;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.*;

public class CheckoutTest extends TestBase {

    @Test
    public void CheckoutFlowTest() {

        AuthenticationPage authenticationPage = homePage.clickSingIn();
        homePage = (HomePage) authenticationPage.logIn(ACCOUNT_EMAIL, ACCOUNT_PASSWORD);

        ResultsPage resultsPage = homePage.searchFor("blouse");
        homePage = resultsPage.addFirstItemToCart();

        SummaryPage summaryPage = homePage.goToSummary();

        AddressPage addressPage = summaryPage.proceedToCheckout();

        ShippingPage shippingPage = addressPage.proceedToCheckout();
        shippingPage.agreeOnTermsAndConditions();

        PaymentPage paymentPage = shippingPage.proceedToCheckout();

        paymentPage.payByCheck();
        paymentPage.confirmMyOrder();

        Assert.assertEquals(paymentPage.getSuccessMessage(), "Your order on My Store is complete.");
    }
}
