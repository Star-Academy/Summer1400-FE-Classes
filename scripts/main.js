// separator
const SEPARATOR_STYLE = 'background-color: royalblue; color: white';
const SEPARATOR_LENGTH = 50;
const SEPARATOR_SPACE_LENGTH = 2;

let isTheFirstSeparator = true;

const logSeparator = (section) => {
    const linesLength = SEPARATOR_LENGTH - section.length - SEPARATOR_SPACE_LENGTH;
    const leftLineLength = Math.floor(linesLength / 2);
    const rightLineLength = linesLength - leftLineLength;

    const leftLine = '='.repeat(leftLineLength);
    const rightLine = '='.repeat(rightLineLength);
    const space = ' '.repeat(SEPARATOR_SPACE_LENGTH);

    let result = leftLine + space + section + space + rightLine;

    if (isTheFirstSeparator) isTheFirstSeparator = false;
    else result = '\n\n' + result;

    console.log('%c' + result, SEPARATOR_STYLE);
};

// try/catch
const tryCatch = (callback) => {
    try {
        callback();
    } catch (e) {
        console.error(e);
    }
};
