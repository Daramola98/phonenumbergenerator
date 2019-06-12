import { generatePhoneNumbers, formatDataForDownload, formatDataForNumberTable, findMaxAndMin } from '../../utils'

describe('GeneratePhoneNumbers', () => {
    it('Generates a list of phone numbers according to the amount of numbers requested', () => {
        const numbersList = generatePhoneNumbers(5);
        expect(numbersList.length).toEqual(5);
    });

    it('Returns undefined if a user passes an input that is not a number', () => {
        const numbersList = generatePhoneNumbers('A');
        expect(numbersList).toEqual(undefined);
    });
})

describe('FormatDataForDownload', () => {
    it('Formats a list of phone numbers for download', () => {
        const numbersList = generatePhoneNumbers(5);
        const formattedDownloadList = formatDataForDownload(numbersList);
        expect(formattedDownloadList.includes(numbersList[0]+'\n')).toBe(true);
    });

    it('Returns an empty string if an empty Array is passed ', () => {
        const formattedDownloadList = formatDataForDownload([]);
        expect(formattedDownloadList).toEqual("");
    });
})

describe('FormatDataForNumberTable', () => {
    it('Formats a list of phone numbers for download', () => {
        const numbersList = generatePhoneNumbers(5);
        const formattedTableList = formatDataForNumberTable(numbersList);
        expect(formattedTableList[0].number).toEqual(numbersList[0]);
    });

    it('Returns an empty array if an empty Array is passed ', () => {
        const formattedTableList = formatDataForNumberTable([]);
        expect(formattedTableList).toEqual([]);
    });
})

describe('FindMaxAndMin', () => {
    it('Finds the Max and Min of phone numbers generated', () => {
        const numbersList = generatePhoneNumbers(5);
        const result = findMaxAndMin(numbersList);
        expect(result.length).toEqual(2);
        expect(result[0] < result[1]).toBe(true);
    });

    it('Returns an empty array if an empty Array is passed ', () => {
        const result = findMaxAndMin([]);
        expect(result).toEqual([]);
    });
})