export const Constants = {
    HOME: "Home",
    ACTIVITIES: "Activities",
    LIBRARY: "Library",
    DASHBOARD: "Dashboard",
    EXPERIENCES: "Experiences",
    JOURNEYS: "Journeys"
}

export const LoadingState = {
    INITIAL: "initial",
    FETCH: "fetch",
    REFRESH: "refresh",
}
export const routes = [
    { key: 'Products', title: "P", id: 1 },
    { key: 'Carts', title: "C", id: 2 },
    { key: 'Recipes', title: "R", id: 3 },
    { key: 'Posts', title: "P", id: 4 },
    { key: 'Users', title: "U", id: 5 },
];
export const NetworkCallStatus = {
    SUCCESS: "success",
    ERROR: "error",
    STATUS_CODE_200: "200"
}
export const BASE_URL = "https://dummyjson.com"
// export const ApiUrl = {
//     BASE_URL: "https://dummyjson.com"
// }