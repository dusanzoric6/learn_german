var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "198",
        "ko": "802"
    },
    "minResponseTime": {
        "total": "1733",
        "ok": "2651",
        "ko": "1733"
    },
    "maxResponseTime": {
        "total": "9408",
        "ok": "9004",
        "ko": "9408"
    },
    "meanResponseTime": {
        "total": "4596",
        "ok": "6224",
        "ko": "4194"
    },
    "standardDeviation": {
        "total": "1372",
        "ok": "1094",
        "ko": "1111"
    },
    "percentiles1": {
        "total": "4359",
        "ok": "6462",
        "ko": "4210"
    },
    "percentiles2": {
        "total": "5123",
        "ok": "7177",
        "ko": "4616"
    },
    "percentiles3": {
        "total": "7262",
        "ok": "7550",
        "ko": "5995"
    },
    "percentiles4": {
        "total": "8544",
        "ok": "7758",
        "ko": "8805"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 198,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 802,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "19.8",
        "ko": "80.2"
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
        "ok": "198",
        "ko": "802"
    },
    "minResponseTime": {
        "total": "1733",
        "ok": "2651",
        "ko": "1733"
    },
    "maxResponseTime": {
        "total": "9408",
        "ok": "9004",
        "ko": "9408"
    },
    "meanResponseTime": {
        "total": "4596",
        "ok": "6224",
        "ko": "4194"
    },
    "standardDeviation": {
        "total": "1372",
        "ok": "1094",
        "ko": "1111"
    },
    "percentiles1": {
        "total": "4359",
        "ok": "6462",
        "ko": "4210"
    },
    "percentiles2": {
        "total": "5123",
        "ok": "7177",
        "ko": "4616"
    },
    "percentiles3": {
        "total": "7262",
        "ok": "7550",
        "ko": "5995"
    },
    "percentiles4": {
        "total": "8544",
        "ok": "7758",
        "ko": "8805"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 198,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "count": 802,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "100",
        "ok": "19.8",
        "ko": "80.2"
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
