$("#submit").click(function () {

    var input = [5,9,14,16,17];
    var correctResults = [120, 362880, 87178291200, 20922789888000, 355687428096000];

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