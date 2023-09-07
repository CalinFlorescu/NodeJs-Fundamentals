const { performance, PerformanceObserver } = require('perf_hooks');
const axios = require('axios');

// Define an observer that will be used to collect performance entries
const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
        console.log(entry);
    });
});

// Configure Observer to collect all entries of type measure and logs them at the end of the process execution
perfObserver.observe({ entryTypes: ['measure'], buffer: true });

const getPeople = async () => {
    try {
        performance.mark('start-api-request');
        const result = await axios.get('https://swapi.dev/api/people/1/');
        console.log(result.data);
    } catch (error) {
        console.error(error);
    } finally {
        performance.mark('end-api-request');
        performance.measure('API Request', 'start-api-request', 'end-api-request');
    }
}

getPeople();