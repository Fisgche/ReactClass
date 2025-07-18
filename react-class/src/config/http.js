import axios from "axios";

export const moviesApis = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    headers:{
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWJiNGM2MDFlODU5ZDkyODQ0YjQzNDc1ZWJiMGUzYyIsIm5iZiI6MTc1Mjg1MjQzMC40ODk5OTk4LCJzdWIiOiI2ODdhNjdjZWVlNjNmMmRhMTExNjk1M2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NUdo0llkrsKo3rXWSdZRbTtL4bG2woL9142GB4dx0HY`
    }
});