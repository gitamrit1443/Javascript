
        const statusCb = document.getElementById('callback-status');
        const statusPr = document.getElementById('promise-status');

        
        function loginUser(callback) {
            setTimeout(() => {
                console.log("1. User Logged In");
                callback("User_123");
            }, 1000);
        }

        function getUserData(userId, callback) {
            setTimeout(() => {
                console.log("2. Data fetched for " + userId);
                callback({ name: "Amritpal", age: 22 });
            }, 1000);
        }

        function getSettings(userData, callback) {
            setTimeout(() => {
                console.log("3. Settings loaded for " + userData.name);
                callback("Dark Mode Active");
            }, 1000);
        }

        
        function runCallbackHell() {
            statusCb.innerText = "Logging in...";
            
            loginUser(function(userId) {
                statusCb.innerText = "Fetching Data...";
                
                getUserData(userId, function(data) {
                    statusCb.innerText = "Loading Settings...";
                    
                    getSettings(data, function(setting) {
                        // Dekho ye nesting kaise right side shift ho rahi hai!
                        statusCb.innerText = "Final: " + setting;
                        console.log("Success with Callbacks!");
                    });
                });
            });
        }

        const loginUserP = () => new Promise((res) => loginUser(res));
        const getUserDataP = (id) => new Promise((res) => getUserData(id, res));
        const getSettingsP = (data) => new Promise((res) => getSettings(data, res));

        function runPromises() {
            statusPr.innerText = "Logging in...";

            loginUserP()
                .then(userId => {
                    statusPr.innerText = "Fetching Data...";
                    return getUserDataP(userId); // Return karna zaroori hai chain ke liye
                })
                .then(data => {
                    statusPr.innerText = "Loading Settings...";
                    return getSettingsP(data);
                })
                .then(setting => {
                    statusPr.innerText = "Final: " + setting;
                    console.log("Success with Promises!");
                })
                .catch(err => {
                    console.error("Error handle ho gaya:", err);
                });
        }
