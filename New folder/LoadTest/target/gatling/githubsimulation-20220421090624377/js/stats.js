var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "176",
        "ko": "824"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "627",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "7377",
        "ok": "7377",
        "ko": "5937"
    },
    "meanResponseTime": {
        "total": "1237",
        "ok": "3878",
        "ko": "673"
    },
    "standardDeviation": {
        "total": "1595",
        "ok": "1625",
        "ko": "847"
    },
    "percentiles1": {
        "total": "697",
        "ok": "4215",
        "ko": "510"
    },
    "percentiles2": {
        "total": "1726",
        "ok": "5041",
        "ko": "761"
    },
    "percentiles3": {
        "total": "5006",
        "ok": "6379",
        "ko": "2383"
    },
    "percentiles4": {
        "total": "6237",
        "ok": "6620",
        "ko": "4094"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 166,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 824,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "16",
        "ko": "74.909"
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
        "ok": "176",
        "ko": "824"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "627",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "7377",
        "ok": "7377",
        "ko": "5937"
    },
    "meanResponseTime": {
        "total": "1237",
        "ok": "3878",
        "ko": "673"
    },
    "standardDeviation": {
        "total": "1595",
        "ok": "1625",
        "ko": "847"
    },
    "percentiles1": {
        "total": "697",
        "ok": "4215",
        "ko": "510"
    },
    "percentiles2": {
        "total": "1726",
        "ok": "5041",
        "ko": "761"
    },
    "percentiles3": {
        "total": "5006",
        "ok": "6379",
        "ko": "2383"
    },
    "percentiles4": {
        "total": "6237",
        "ok": "6620",
        "ko": "4094"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 166,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 824,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "16",
        "ko": "74.909"
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
