import mongoose from "mongoose";

export type WatchModel = {
    sub: mongoose.Schema.Types.ObjectId,
    createdAt: Date
}

const watchSchema = new mongoose.Schema<WatchModel>({
    createdAt: {
        type: Date,
        required: true
    },
});

export const watchModel = mongoose.model<WatchModel>("watches", watchSchema)