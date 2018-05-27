const app = new Vue({
  el: '#app',
  data: {
  }
});

$( "#submit" ).click(function() {
    try {
        var code = 'function execute(){';
        code += $("#code").val() + '}';
        var result = eval(code + '\n execute();');
        console.log(result);
    }catch (e) {
        $('#modalText').text(e);

        $('#myModal').modal('toggle');
    }
});