import mongoose from "mongoose";

export type DataEntryModel = {
    sub: mongoose.Schema.Types.ObjectId,
    date: Date
}

const dataEntrySchema = new mongoose.Schema<DataEntryModel>({
    date: {
        type: Date,
        required: true
    },
});

export const dataEntryModel = mongoose.model<DataEntryModel>("dataEntries", dataEntrySchema)