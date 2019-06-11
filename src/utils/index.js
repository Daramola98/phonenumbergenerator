const generatePhoneNumbers = (phoneNumberCount) => {
    console.log(typeof phoneNumberCount);
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
}

const formatDataForNumberTable = (numberList) => {
    if (Array.isArray(numberList) && !numberList.length){
        return [];
    }
    return numberList.map((number) => ({
        number
    }));
}

export { generatePhoneNumbers, formatDataForNumberTable };