function mergeAndRemoveDuplicates() {

    var array1 = document.getElementById('array1Input').value.split(',').map(item => item.trim());
    var array2 = document.getElementById('array2Input').value.split(',').map(item => item.trim());

    var mergedArray = [...new Set([...array1, ...array2])];

    document.getElementById('result').innerText = 'Merged Array without Duplicates: ' + mergedArray;
}