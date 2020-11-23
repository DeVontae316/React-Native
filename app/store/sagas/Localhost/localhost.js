export function createEndPoint(endpoint) {
    return `http://172.00.0.00:3000/${endpoint}`;

}

export function createEndPoints(endpoint, endpoint2) {
    return `http://172.00.0.00:3000/${endpoint}/${endpoint2}`;

}
export function createSearchQueries(endpoint, query) {
    return `http://172.00.0.00:3000/${endpoint}?label=${query}`;
}
export function createLimitedSearchQueries(endpoint, limitNum, skipNum) {
    return `http://172.00.0.00:3000/${endpoint}?limit=${limitNum}&skip=${skipNum}`;
}


