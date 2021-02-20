import { CoursesData } from '../EnumsAndConstants'

export const getNonCollegeCourses = (userCollegeCourses: string[]) => {
    return CoursesData.filter(course => {
        return !userCollegeCourses.includes(course.name)
    })
}

export const foundErrorInFullName = (str: string) => {
    const Regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/
    return !Regex.test(str)
}