export const constants = {
    formStatus: {
        successfully: 'Thank you',
    },
    errorMessages: {
        name: 'Enter valid name. Only letters and spaces',
        email: 'Enter valid email address.',
        notes: 'Enter minimum 20 characters.',
        emoji: 'Emoji not allowed. Enter valid characters'
    },
    regExp: {
        name: /^[a-zA-Z\s]+$/,
        email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    }
}