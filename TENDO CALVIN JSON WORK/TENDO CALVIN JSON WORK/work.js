// Sample JSON data (for demonstration purposes)
const sampleData = {
    "fear": "quiet",
    "chest": -1477429467,
    "how": false,
    "graph": false,
    "camp": 929234312,
    "plural": "settle",
    "type": "module"
};

// 1. Callback-based Approach
function fetchDataWithCallback(callback) {
    try {
        // Simulate async fetch with setTimeout
        setTimeout(() => {
            if (sampleData) {
                callback(null, sampleData);
            } else {
                callback(new Error('Data fetch failed'));
            }
        }, 100);
    } catch (error) {
        callback(error);
    }
}

// Usage example
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error('Callback Error:', error);
        return;
    }
    console.log('Callback Data:', data);
});

// 2. Promise-based Approach
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                if (sampleData) {
                    resolve(sampleData);
                } else {
                    reject(new Error('Data fetch failed'));
                }
            }, 100);
        } catch (error) {
            reject(error);
        }
    });
}

// Usage example
fetchDataWithPromise()
    .then(data => {
        console.log('Promise Data:', data);
        return data;
    })
    .catch(error => {
        console.error('Promise Error:', error);
    });

// 3. Async/Await Approach
async function fetchDataWithAsyncAwait() {
    try {
        // Simulate network delay and potential failure
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (sampleData) {
            console.log('Async/Await Data:', sampleData);
            return sampleData;
        } else {
            throw new Error('Data fetch failed');
        }
    } catch (error) {
        console.error('Async/Await Error:', error);
        throw error;
    }
}

// Usage example
(async () => {
    try {
        await fetchDataWithAsyncAwait();
    } catch (error) {
        // Handle any unhandled errors
    }
})();

// Data Processing Function (works with all approaches)
function processData(data) {
    const processedData = {
        numericValues: {
            chest: data.chest,
            camp: data.camp
        },
        booleanValues: {
            how: data.how,
            graph: data.graph
        },
        stringValues: {
            fear: data.fear,
            plural: data.plural,
            type: data.type
        }
    };

    // Display processed data
    console.log('Processed Data:', JSON.stringify(processedData, null, 2));
    return processedData;
}

// Example of processing data from any fetch method
fetchDataWithPromise()
    .then(processData)
    .catch(console.error);