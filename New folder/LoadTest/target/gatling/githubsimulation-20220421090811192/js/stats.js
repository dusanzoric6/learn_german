var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "186",
        "ko": "814"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "475",
        "ko": "52"
    },
    "maxResponseTime": {
        "total": "6712",
        "ok": "6712",
        "ko": "5748"
    },
    "meanResponseTime": {
        "total": "1235",
        "ok": "3768",
        "ko": "657"
    },
    "standardDeviation": {
        "total": "1606",
        "ok": "1739",
        "ko": "823"
    },
    "percentiles1": {
        "total": "601",
        "ok": "4086",
        "ko": "505"
    },
    "percentiles2": {
        "total": "1708",
        "ok": "5118",
        "ko": "749"
    },
    "percentiles3": {
        "total": "5042",
        "ok": "6256",
        "ko": "2463"
    },
    "percentiles4": {
        "total": "6245",
        "ok": "6595",
        "ko": "3749"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 164,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 814,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "16.909",
        "ko": "74"
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
        "ok": "186",
        "ko": "814"
    },
    "minResponseTime": {
        "total": "52",
        "ok": "475",
        "ko": "52"
    },
    "maxResponseTime": {
        "total": "6712",
        "ok": "6712",
        "ko": "5748"
    },
    "meanResponseTime": {
        "total": "1235",
        "ok": "3768",
        "ko": "657"
    },
    "standardDeviation": {
        "total": "1606",
        "ok": "1739",
        "ko": "823"
    },
    "percentiles1": {
        "total": "601",
        "ok": "4086",
        "ko": "505"
    },
    "percentiles2": {
        "total": "1708",
        "ok": "5118",
        "ko": "749"
    },
    "percentiles3": {
        "total": "5042",
        "ok": "6256",
        "ko": "2463"
    },
    "percentiles4": {
        "total": "6245",
        "ok": "6595",
        "ko": "3749"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 164,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 814,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "16.909",
        "ko": "74"
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
