var missionCriticalWeight = 6.5;
var vipCallerWeight = 8;
var calculationOffset = 4.0;
var outputLines = [];
var calculationSets = [];
function calculateRawPriorityValue(u, i) {
    return (4 - u + calculationOffset) * (4 - i + calculationOffset);
}
var minProduct = calculateRawPriorityValue(3, 3);
var productRange = calculateRawPriorityValue(1, 1) - minProduct;
for (var urgency = 1; urgency <= 3; urgency++) {
    for (var impact = 1; impact <= 3; impact++)
    calculationSets.push({ urgency: urgency, impact: impact, priority: ((calculateRawPriorityValue(urgency, impact) - minProduct) / productRange) * 4.0 });
}
outputLines.push("  \"Urgency and Impact only\": [");
calculationSets.sort(function(a, b) { return (a.urgency * a.impact) - (b.urgency * b.impact); });
calculationSets.forEach(function(a) {
    a.priority = 5 - Math.round(a.priority);
    outputLines.push("    " + JSON.stringify(a));
});

calculationSets = [];
productRange += vipCallerWeight;
for (var urgency = 1; urgency <= 3; urgency++) {
    for (var impact = 1; impact <= 3; impact++) {
        calculationSets.push({ urgency: urgency, impact: impact, vip: true,
            priorityWithVip: ((calculateRawPriorityValue(urgency, impact) - minProduct + vipCallerWeight) / productRange) * 4.0,
            normalPriority: ((calculateRawPriorityValue(urgency, impact) - minProduct) / productRange) * 4.0 });
    }
}
outputLines.push("  ]", "  \"Urgency and Impact with VIP status\": [");
calculationSets.sort(function(a, b) { return (a.urgency * a.impact) - (b.urgency * b.impact); });
calculationSets.forEach(function(a) {
    a.priorityWithVip = 5 - Math.round(a.priorityWithVip);
    a.normalPriority = 5 - Math.round(a.normalPriority);
    outputLines.push("    " + JSON.stringify(a));
});

calculationSets = [];
productRange += missionCriticalWeight;
for (var urgency = 1; urgency <= 3; urgency++) {
    for (var impact = 1; impact <= 3; impact++) {
        calculationSets.push({ urgency: urgency, impact: impact,
            normalPriority: ((calculateRawPriorityValue(urgency, impact) - minProduct) / productRange) * 4.0,
            priorityWithMissionCriticalOnly: ((calculateRawPriorityValue(urgency, impact) - minProduct + missionCriticalWeight) / productRange) * 4.0,
            priorityWithVipOnly: ((calculateRawPriorityValue(urgency, impact) - minProduct + vipCallerWeight) / productRange) * 4.0,
            priorityWithVipAndMissionCritical: ((calculateRawPriorityValue(urgency, impact) - minProduct + vipCallerWeight + missionCriticalWeight) / productRange) * 4.0 });
    }
}
outputLines.push("  ]", "  \"Urgency and Impact with VIP status and Mission Criticality\": [");
calculationSets.sort(function(a, b) { return (a.urgency * a.impact) - (b.urgency * b.impact); });
calculationSets.forEach(function(a) {
    a.normalPriority = 5 - Math.round(a.normalPriority);
    a.priorityWithMissionCriticalOnly = 5 - Math.round(a.priorityWithMissionCriticalOnly);
    a.priorityWithVipOnly = 5 - Math.round(a.priorityWithVipOnly);
    a.priorityWithVipAndMissionCritical = 5 - Math.round(a.priorityWithVipAndMissionCritical);
    outputLines.push("    " + JSON.stringify(a));
});

gs.info("\n{\n" + outputLines.join("\n") + "\n  }\n}");
