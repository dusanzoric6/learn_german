package simpulations

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class GitHubSimulation extends Simulation {

  val httpConf = http.baseUrl("https://github.com")

  val scn = scenario("GitHub_Scenario")
    .exec(http("CallGitHubHomePage")
      .get("")
      .check(status.is(200)))

  setUp(
    scn.inject(
      rampUsers(1000).during(15)
    )
  ).protocols(httpConf)
}
