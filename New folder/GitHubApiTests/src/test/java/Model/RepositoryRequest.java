package Model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RepositoryRequest {

    private final String name;
    private final boolean isAutoInit;
    private final boolean isPrivate;
    private final String gitignoreTemplate;

    public RepositoryRequest(String name, boolean autoInit, boolean isPrivate, String gitignoreTemplate) {
        this.name = name;
        this.isAutoInit = autoInit;
        this.isPrivate = isPrivate;
        this.gitignoreTemplate = gitignoreTemplate;
    }

    public String getName() {
        return name;
    }

    @JsonProperty("auto_init")
    public boolean isAutoInit() {
        return isAutoInit;
    }

    @JsonProperty("private")
    public boolean isPrivate() {
        return isPrivate;
    }

    @JsonProperty("gitignore_template")
    public String getGitignoreTemplate() {
        return gitignoreTemplate;
    }
}
