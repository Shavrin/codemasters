const app = new Vue({
  el: '#app',
  data: {
  }
});

$("#submit").click(function () {

    var input = [1, 2, 3, 4, 5];
    var correctResults = [2, 3, 4, 5, 6];

    function callback(element, index, array) {
        var result = eval(code + '\n execute(input[' + index + ']);');
        if (result === correctResults[index]) {
            $('#test' + (index + 1)).addClass('success');
            $('#test' + (index + 1)).removeClass('danger');

            $('#result' + (index + 1)).text("Success!");
        }
        else {
            $('#test' + (index + 1)).addClass('danger');
            $('#result' + (index + 1)).text("Failure!");
        }
    }

    try {
        var code = 'function execute(input){';
        code += $("#code").val() + '}';
        input.forEach(callback);



    }catch (e) {
        $('#modalText').text(e);
        $('#myModal').modal('toggle');
    }



});