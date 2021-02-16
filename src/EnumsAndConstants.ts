
export enum Colors {
    Black = "rgb(0,0,0)",
    White = "rgb(255,255,255)",
    Primary = "rgb(86,74,244)", // #564AF4
    Secondary = "rgb(255,26,102)", // #FF1A66
    Grey =  "rgb(121,121,121)", // #797979,
    LightGrey =  "rgb(231,231,232)", // #E7E7E8,
}

export const textFieldFontSize = 14

export const NO_ERROR = "NO_ERROR"

export const defaultCourseButtonStyles = {
    color: 'rgba(0,0,0,0.6)',
    borderColor: 'rgb(221,221,221)',
    backgroundColor: Colors.LightGrey
}

export const TemplateTexts = {
    takingCourses: "Below are the courses I’m taking this semester:",
    notTakingCourses: "Sadly I am not taking any courses this semester."
}

export enum ErrorIsRegarding {
    Nil = -1,
    Email,
    Password,
}

export enum ErrorResponses {
    UnknownError = "An unknown error occurred",
}

export const CollegeMajorsData = [
    {
        name: "Theatre Arts",
    },
    {
        name: "Adventure Education",
    },
    {
        name: "Astrobiology",
    },
    {
        name: "Fermentation Sciences ",
    },
    {
        name: "Auctioneering",
    },
    {
        name: "African Studies",
    },
    {
        name: "Bagpiping",
    },
]

export const CoursesData = [
    {
        name: "AOT 211",
    },
    {
        name: "TVD 265",
    },
    {
        name: "ATLA 230",
    },
    {
        name: "ATLA 265",
    },
    {
        name: "GOT 165",
    },
    {
        name: "THOR 190",
    },
]
