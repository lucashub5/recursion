//Task 1

function generateFibonacci(n) {
    const array = [0, 1];

    function fibs() {

        for (let i = 2; array[i - 1] + array[i - 2] < array[i - 1] + n; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }

        console.log('fibs(): ' + array);
    }

    function fibsRec() {
        let i = array.length;

        if (array[i - 1] + array[i - 2] >= array[i - 1] + n) {
            return console.log('fibsRec(): ' + array);
        } else {
            array[i] = array[i - 1] + array[i - 2];
            fibsRec();
        }
    }

    fibs();
    fibsRec();
}

generateFibonacci(8);

//Task 2

function mergeSort(array) {
    const array_sort = array;
    let i = 1;
    let okSort = false;
    sortS();

    function sortS() {
        if (okSort == true) {
            console.log('mergeSort(): ' + array_sort);
        }
        else {
            if (array_sort[i] < array_sort[i - 1]) {
                const sort = array_sort[i];
                array_sort[i] = array_sort[i - 1];
                array_sort[i - 1] = sort;
                okSort = false;
                i = 1;
                sortS();
            }
            else if (i <= array_sort.length) {
                i++;
                sortS();
            }
            else {
                okSort = true;
                sortS();
            }
        }
    }
}

mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
mergeSort([105, 79, 100, 110]);

//Results

//fibs(): 0,1,1,2,3,5,8,13
//fibsRec(): 0,1,1,2,3,5,8,13
//mergeSort(): 0,1,1,2,3,5,8,13
//mergeSort(): 79,100,105,110