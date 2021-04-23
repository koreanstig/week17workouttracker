const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            enum: ["cardio", "resistance"],
            required: "Choose cardio or resistance exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the exercise name"
        },
        duration: {
            type: Number,
            required: "Enter an exercise duration in minutes"
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;