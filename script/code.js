// let value1 = document.getElementById('value1').value;
// let value2 = document.getElementById('value2').value;

// let add = value1 + value2;
//     document.querySelector('[data-output]').textContent = add;


document.getElementById('add').addEventListener('click', function addUp () {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let add = 0;
    array.forEach(num => {
        add += num;
    })
    document.querySelector('[data-output]').textContent = add;
});  
