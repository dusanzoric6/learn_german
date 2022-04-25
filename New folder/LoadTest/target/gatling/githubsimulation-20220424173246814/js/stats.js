var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "190",
        "ko": "810"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "668",
        "ko": "54"
    },
    "maxResponseTime": {
        "total": "11355",
        "ok": "11355",
        "ko": "6798"
    },
    "meanResponseTime": {
        "total": "1959",
        "ok": "6154",
        "ko": "975"
    },
    "standardDeviation": {
        "total": "2569",
        "ok": "2817",
        "ko": "1091"
    },
    "percentiles1": {
        "total": "912",
        "ok": "6113",
        "ko": "825"
    },
    "percentiles2": {
        "total": "2353",
        "ok": "8656",
        "ko": "1054"
    },
    "percentiles3": {
        "total": "8459",
        "ok": "10342",
        "ko": "3448"
    },
    "percentiles4": {
        "total": "10296",
        "ok": "10908",
        "ko": "4957"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 179,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 810,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "11.875",
        "ko": "50.625"
    }
},
contents: {
"req_callgithubhomep-46478": {
        type: "REQUEST",
        name: "CallGitHubHomePage",
path: "CallGitHubHomePage",
pathFormatted: "req_callgithubhomep-46478",
stats: {
    "name": "CallGitHubHomePage",
    "numberOfRequests": {
        "total": "1000",
        "ok": "190",
        "ko": "810"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "668",
        "ko": "54"
    },
    "maxResponseTime": {
        "total": "11355",
        "ok": "11355",
        "ko": "6798"
    },
    "meanResponseTime": {
        "total": "1959",
        "ok": "6154",
        "ko": "975"
    },
    "standardDeviation": {
        "total": "2569",
        "ok": "2817",
        "ko": "1091"
    },
    "percentiles1": {
        "total": "912",
        "ok": "6113",
        "ko": "825"
    },
    "percentiles2": {
        "total": "2353",
        "ok": "8656",
        "ko": "1054"
    },
    "percentiles3": {
        "total": "8459",
        "ok": "10342",
        "ko": "3448"
    },
    "percentiles4": {
        "total": "10296",
        "ok": "10908",
        "ko": "4957"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 179,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 810,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "11.875",
        "ko": "50.625"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
