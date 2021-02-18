import { ErrorIsRegarding } from "../EnumsAndConstants"

export const returnErrorDetails = (errorCode: string) => {
    let errorType = ErrorIsRegarding.Nil
    let helperText = ''

    switch (errorCode) {
        case 'auth/invalid-email': 
            errorType = ErrorIsRegarding.Email
            helperText = 'The email address is badly formatted'
            break;

        case 'auth/email-already-in-use': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This user already exists. Log in'
            break;

        case 'auth/weak-password': 
            errorType = ErrorIsRegarding.Password
            helperText = 'The password must be at least 6 characters'
            break;

        case 'auth/operation-not-allowed': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This sign up method is unauthorized'
            break;

        case 'auth/user-disabled': 
            errorType = ErrorIsRegarding.Email
            helperText = "This user's account is disabled"
            break;

        case 'auth/user-not-found': 
            errorType = ErrorIsRegarding.Email
            helperText = 'This user does not exist'
            break;

        case 'auth/user-wrong-password': 
            errorType = ErrorIsRegarding.Password
            helperText = 'Wrong password entered'
            break;

        default:console.log("An unknown error occurred in function: returnErrorDetails");
            errorType = ErrorIsRegarding.Nil
            helperText = 'Email address is not valid'
            break;
    }

    return {
        errorType,
        helperText
    }
}