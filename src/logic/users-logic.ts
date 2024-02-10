import { UserModel, userModel } from "../models/user-model";

export async function getAllUsers() {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function getUserById(userId: string) {

    try {
        const user = await userModel.findById(userId);
        return user;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function getUserByParticipentId(userParticipentId: string) {

    try {
        const user = await userModel.find({ participentId: userParticipentId });
        return user;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function deleteUserByParticipentId(userParticipentId: string) {

    try {
        const user = await userModel.deleteOne({ participentId: userParticipentId });
        return user;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function addNewUser(inputData: UserModel) {

    const user = {
        createdAt: new Date,
        participentId: inputData.participentId,
        startDate: inputData.startDate,
        endDate: null,
        accessToken: inputData.accessToken
    };

    try {
        return await userModel.create(user);
    } catch (error) {
        console.error(`Error creating new squad: ${error.message}`);
    };
}

// tests

export async function addNewTestUsers(amount: number) {
    try {
        const testUsers = [];

        for (let i = 0; i < amount; i++) {
            const user: UserModel = await userModel.create({
                createdAt: new Date,
                participentId: `testId-${i + 1}`,
                startDate: `1990-05-29`,
                endDate: null,
                accessToken: `test`
            });

            testUsers.push(user);
        }

        return testUsers;

    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}

export async function deleteAllTestUsers() {

    try {
        const users = await userModel.deleteMany({ accessToken: "test" });
        return users;
    } catch (error) {
        console.error(`Error fetching data: ${error.message}`);
    }
}