$("#submit").click(function () {

    var input = ['ABCDFE','-123ABCa','123123123123123aA','xx!@#!@#aBA','AbAbAbAbAbA'];
    var correctResults = ['abcdfe', '-123abca', '123123123123123aa', 'xx!@#!@#aba', 'abababababa'];

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