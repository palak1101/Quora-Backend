import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    questionContent: {
        type: String,
        required: true
    },
    questionUrl: {
        type: String,
    },
    answers: {
        type: mongoose.Types.ObjectId,
        ref: 'Answers'
    },
    date: {
        type: Date,
        default: Date.now()
    },
    // users: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Users'
    // }
})

const Question = mongoose.model("Question", QuestionSchema)

export default Question;