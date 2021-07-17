export const requiredField = (value) => {
    if (value) return undefined;

    return 'Поле обязательно для заполнения';
}

export const maxLengthValue = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальная длина символов ${maxLength}`;
    return undefined;
}