const Subject = require('../models/subject')
const subjectController = {
    get: async (req, res) => {
        try {
            const subjects = await Subject.find();
            res.status(200).json(subjects);
        } catch (error) {
            res.status(500).json({ message: "Error fetching subjects", error: error.message });
        }
    },
    post: (req, res) => {
        res.status(200).json({ message: "Create a subject" });
    },
    detail: (req, res) => {
        res.status(200).json({ message: "Detail subject" });
    },
    update: (req, res) => {
        res.status(200).json({ message: "Update a subject" });
    },
    delete: (req, res) => {
        res.status(200).json({ message: "Delete a subject" });
    }
}

module.exports = subjectController;