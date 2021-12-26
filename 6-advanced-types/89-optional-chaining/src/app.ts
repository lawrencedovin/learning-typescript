const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    //job: { title: 'CEO', description: 'Mountain Dew'}
};

// Checks if fetchUserData exists before trying to access job.
// Then checks if fetchUserData.job exists first before trying to access title.
console.log(fetchedUserData?.job?.title);