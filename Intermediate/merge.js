const mergeAndMax = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    // console.log(mergedArray);
    const maximum = Math.max(...mergedArray);
    console.log(maximum);
}

mergeAndMax([1, 3, 5, 7, 9], [2, 4, 6, 8]);