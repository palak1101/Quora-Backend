import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    answerContent: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    question: {
        type: mongoose.Types.ObjectId,
        ref: 'Question'
    },
    users: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    likes: [
        {
            type: String
        }
    ]
})

const Answer = mongoose.model("Answers", AnswerSchema)

export default Answer;

