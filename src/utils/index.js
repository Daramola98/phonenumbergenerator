const generatePhoneNumbers = (phoneNumberCount) => {
    if(typeof phoneNumberCount !== 'number'){
        return;
    }
    // Using sets to achieve uniqueness
    const phoneNumbersList = new Set();

    while(phoneNumbersList.size < phoneNumberCount){
        phoneNumbersList.add(generatePhoneNumber());
    }

    return Array.from(phoneNumbersList);
};

const generatePhoneNumber = () => {
    // Logic to generate a 9 digits number
    return '0' + (Math.floor(100000000 + Math.random() * 900000000));
};

const formatDataForNumberTable = (numberList) => {
    if (Array.isArray(numberList) && !numberList.length){
        return [];
    }
    return numberList.map((number) => ({
        number
    }));
};

const formatDataForDownload = (numberList) => {
    if (Array.isArray(numberList) && !numberList.length){
        return [];
    }
    return numberList.map((number) => number+'\n').join(' ');
};

const findMaxAndMin = (numberList) => {
    if (Array.isArray(numberList) && !numberList.length){
        return [];
    }
    const sortedList = numberList.sort((numberA, numberB) => Number(numberA) - Number(numberB));
    return [sortedList[0], sortedList[sortedList.length - 1]];
};


export { generatePhoneNumbers, formatDataForNumberTable, formatDataForDownload, findMaxAndMin };