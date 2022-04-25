package StepDefinitions;

import Client.GitHubClient;
import Model.Context;
import Model.RepositoryRequest;
import com.jayway.restassured.response.ValidatableResponse;
import io.cucumber.java.DataTableType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.testng.Assert;

import java.util.List;
import java.util.Map;
import java.util.Objects;


public class Steps {

    private final GitHubClient gitHubClient;
    private ValidatableResponse response;
    private final Context context;

    public Steps(GitHubClient gitHubClient, Context context) {
        this.gitHubClient = gitHubClient;
        this.context = context;
    }

    @DataTableType
    public RepositoryRequest createRepositoryDefinition(Map<String, String> entry) {
        return new RepositoryRequest(
                entry.get("name"),
                Boolean.parseBoolean(entry.get("autoInit")),
                Boolean.parseBoolean(entry.get("isPrivate")),
                entry.get("gitignoreTemplate")
        );
    }

    @Given("I try to create new repository with following details:")
    public void ICreateNewRepository(RepositoryRequest request) {
        response = gitHubClient.postNewRepository(request);
        context.setRepoName(request.getName());
    }

    @Given("I try to update an existing repository {string} with following details:")
    public void IUpdateNewRepository(String repoName, RepositoryRequest request) {
        response = gitHubClient.patchRepository(repoName, request);
        context.setRepoName(request.getName());
    }

    @Given("I try to delete an existing repository {string}")
    public void IDeleteNewRepository(String repoName) {
        response = gitHubClient.deleteRepository(repoName);
    }


    @Then("status code is {int}")
    public void statusCodeIs(int statusCode) {
        response.assertThat().statusCode(statusCode);
    }

    @Then("error message contains {string}")
    public void errorMessageContains(String message) {

        List<String> responseErrorMessages = response.extract().path("errors.message");
        Assert.assertTrue(responseErrorMessages
                .stream()
                .filter(Objects::nonNull)
                .anyMatch(s -> s.equals(message)));
    }

    @Then("Response property {string} is {string}")
    public void responseMessageContains(String propertyPath, String propertyValue) {
        Assert.assertEquals(propertyValue, response.extract().path(propertyPath));
    }
}



















