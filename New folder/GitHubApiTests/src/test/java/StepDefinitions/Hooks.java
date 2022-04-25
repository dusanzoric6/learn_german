package StepDefinitions;

import Client.GitHubClient;
import Model.Context;
import io.cucumber.java.After;

public class Hooks {

    private final GitHubClient gitHubClient;
    private final Context context;

    public Hooks(GitHubClient gitHubClient, Context context) {
        this.gitHubClient = gitHubClient;
        this.context = context;
    }

    @After
    public void deleteTestRepository() {
        if (context.getRepoName() != null) {
            gitHubClient.deleteRepository(context.getRepoName());
        }
    }
}
