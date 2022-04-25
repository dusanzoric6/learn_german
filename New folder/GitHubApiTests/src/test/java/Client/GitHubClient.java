package Client;

import Model.RepositoryRequest;
import com.jayway.restassured.RestAssured;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.ValidatableResponse;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import static com.jayway.restassured.RestAssured.given;

public class GitHubClient {

    public static String ACCOUNT_NAME;
    public static String ACCESS_TOKEN;
    private Properties properties;

    {
        RestAssured.baseURI = "https://api.github.com";
        ACCESS_TOKEN = getConfigProperty("access.token");
        ACCOUNT_NAME = getConfigProperty("account.name");
    }


    public ValidatableResponse postNewRepository(RepositoryRequest request) {
        return given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + ACCESS_TOKEN)
                .body(request).log().all()
                .post("user/repos")
                .then()
                .log().all();
    }

    public ValidatableResponse patchRepository(String repoName, RepositoryRequest request) {
        return given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + ACCESS_TOKEN)
                .body(request).log().all()
                .patch("repos/" + ACCOUNT_NAME + "/" + repoName)
                .then()
                .log().all();
    }

    public ValidatableResponse deleteRepository(String repositoryName) {
        return given()
                .contentType(ContentType.JSON)
                .header("Authorization", "Bearer " + ACCESS_TOKEN)
                .log().all()
                .delete("repos/" + ACCOUNT_NAME + "/" + repositoryName)
                .then()
                .log().all();
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
