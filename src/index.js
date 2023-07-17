window.onload = populateSelect();

function populateSelect() {
    var xhr = new XMLHttpRequest();
    var method = 'GET';
    var overrideMimeType = 'application/json';
    var url = './changes.json';

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                var birds = data.bird;
                var ele = document.getElementById('sel');

                console.log('Birds:', birds); // Debug statement

                // Clear existing options
                ele.innerHTML = '';

                birds.forEach(function (bird) {
                    var option = document.createElement('option');
                    option.value = bird.ID;
                    option.textContent = bird.commit;
                    ele.appendChild(option);
                });

                console.log('Dropdown options:', ele.innerHTML); // Debug statement
            } else {
                console.error('Error loading JSON:', xhr.status); // Debug statement
            }
        }
    };

    xhr.open(method, url, true);
    xhr.send();
}

function show(ele) {
    var msg = document.getElementById('msg');
    msg.innerHTML =
        'Selected Bird: <b>' +
        ele.options[ele.selectedIndex].text +
        '</b> </br>' +
        'ID: <b>' +
        ele.value +
        '</b>';
}
