$("#submit").click(function () {

    var input = ['abba','xolloxx','true','falseeslaf','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'];
    var correctResults = [true, false, false, true, true];

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



    } catch (e) {
        $('#modalText').text(e);
        $('#myModal').modal('toggle');
    }



});