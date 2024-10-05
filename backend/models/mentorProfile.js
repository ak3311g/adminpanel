import mongoose from 'mongoose';

const mentorProfileSchema = new mongoose.Schema({
    about: {
        description: {
            type: String
        },
        location: {
            streetAddress: { type: String },
            district: { type: String },
            postalCode: { type: String },
            state: { type: String },
        },
        languagesKnown: {
            type: [String]
        },
        workStarted: {
            type: String
        },
        socialLinks: [{
            platform: {
                type: String,
            },
            link: {
                type: String,
            }
        }],
        category: {
            type: String
        },
        skills: {
            type: [String]
        },
        domainExpertise: {
            type: [String]
        }
    },
    workAndEducation: {
        work: [{
            jobTitle: {
                type: String
            },
            compName: {
                type: String
            },
            compLogo: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            },
            currentEmployed: {
                type: Boolean
            },
            aboutWork: {
                type: String
            }
        }],
        education: [{
            degree: {
                type: String
            },
            clgName: {
                type: String
            },
            startDate: {
                type: Date
            },
            endDate: {
                type: Date
            }
        }]
    },
    availability: {
        type: Map,
        of: [String],
        default: {},
    },
});


const MentorProfile = mongoose.model('mentor', mentorProfileSchema);

export default MentorProfile;