import mongoose from "mongoose";

export type UserModel = {
    sub: mongoose.Schema.Types.ObjectId,
    createdAt: Date,
    participentId: string,
    startDate: Date,
    endDate: Date,
    accessToken: string
}

const userSchema = new mongoose.Schema<UserModel>({
    participentId: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    accessToken: {
        type: String,
        required: true
    }
});

export const userModel = mongoose.model<UserModel>("users", userSchema)