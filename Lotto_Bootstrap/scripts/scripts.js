localStorage.fieldsNumber;
localStorage.minValue;
localStorage.maxValue;

var lotto = {};
lotto.item = null;
lotto.numbersArray = [];

lotto.saveSettings = function () {
    localStorage.fieldsNumber = document.settings.rangeField.value;
    localStorage.minValue = document.settings.rangeMin.value;
    localStorage.maxValue = document.settings.rangeMax.value;
};

lotto.printNumber = function(){
    var items = document.getElementById("listResult");
    items.innerHTML = '';
    for (var i = 0; i < lotto.numbersArray.length; i++ ) {
        var number = document.createElement("li");
        number.innerHTML = lotto.numbersArray[i];
        items.appendChild(number);
    }
};

lotto.rollNumbers = function (min, max) {
    lotto.numbersArray = [];
    min = Math.ceil(localStorage.minValue);
    max = Math.floor(localStorage.maxValue);
    for(var i = 0; i < localStorage.fieldsNumber; i++){
        lotto.item = Math.floor(Math.random() * (max - min)) + min;
        lotto.numbersArray.push(lotto.item);
    }
    lotto.printNumber();
};
