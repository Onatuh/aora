import { Account, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.kwo.aora",
    projectId: "6669bb5e0018f037aad6",
    databaseId: "6669bc410005251eabe7",
    userCollectionId: "6669bc530004bac4b74f",
    videoCollectionId: "6669bc690004cf9a31fb",
    storageId: "6669bd59003a5599003e"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}