import * as yup from "yup";
import { REGEX_EMAIL_OR_USERNAME, REGEX_NUMBER, REGEX_NUMBER_PHONE } from "../../../constants/Config";

export const schemaLoginPhoneCode = yup.object().shape({
    code: yup.string().matches(REGEX_NUMBER, "Code invalid").required("Code is a required field").min(4, "Code must be 4 digit").max(4, "Code must be 4 digit"),
    phone: yup.string().required("Phone is a required field").matches(REGEX_NUMBER_PHONE, 'Phone invalid'),
}).required();

export const schemaLoginPhonePassword = yup.object().shape({
    phone: yup.string().required("Phone is a required field").matches(REGEX_NUMBER_PHONE, 'Phone invalid'),
    password: yup.string().required("Password is a required field").min(6, 'Password more than 6 character'),
}).required();

export const schemaLoginPhoneResetPassword = yup.object().shape({
    phone: yup.string().matches(REGEX_NUMBER, "Code invalid").required("Phone is a required field").matches(REGEX_NUMBER_PHONE, 'Phone invalid'),
    code: yup.string().required("Code is a required field").min(4, "Code must be 4 digit").max(4, "Code must be 4 digit"),
    newPassword: yup.string().required("New password is a required field").min(6, 'New password more than 6 character'),
}).required();

export const schemaLoginEmail = yup.object().shape({
    email: yup.string().required("Email is a required field").matches(REGEX_EMAIL_OR_USERNAME, 'Email or username invalid'),
    password: yup.string().required("Password is a required field").min(6, 'Password more than 6 character'),
}).required();

export const schemaLoginEmailResetPassword = yup.object().shape({
    email: yup.string().required("Email is a required field").email("Email invalid"),
    code: yup.string().matches(REGEX_NUMBER, "Code invalid").required("Code is a required field").min(6, "Code must be 6 digit").max(6, "Code must be 6 digit"),
    newPassword: yup.string().required("New password is a required field").min(6, 'New password more than 6 character'),
}).required();

export const schemaSignInPhone = yup.object().shape({
    phone: yup.string().required("Phone is a required field").matches(REGEX_NUMBER_PHONE,
        'Phone invalid'),
    day: yup.number().integer().required(),
    month: yup.number().integer().required(),
    year: yup.number().integer().required(),
    code: yup.string().matches(REGEX_NUMBER, "Code invalid").required("Code is a required field").min(4, "Code must be 4 digit").max(4, "Code must be 4 digit")
})
export const schemaSignInEmail = yup.object().shape({
    email: yup.string().required("Email is a required field").email('Email invalid'),
    code: yup.string().matches(REGEX_NUMBER, "Code invalid").required("Code is a required field")
        .min(6, "Code must be 6 digit").max(6, "Code must be 6 digit"),
    password: yup.string().min(6, "Password more than 6 character").required("Password is a required field"),
    day: yup.number().integer().required(),
    month: yup.number().integer().required(),
    year: yup.number().integer().required(),

})