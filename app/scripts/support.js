$(document).ready(
    function() {
    var aCall = $.ajax({
        type: "GET",
        url: 'json/content.json',
        contentType: "image/png",
        dataType: 'JSON'
    });
    aCall.success(function(data) {
        var Data = data;
        $('#image1').attr('src', Data.Images[0]);
        $('#image2').attr('src', Data.Images[1]);
        $('#image3').attr('src', Data.Images[2]);

        for (var i = 0; i < Data.item.length; i++) {
            $('.idata').eq(i).html(Data.item[i].idata);
            $('.iheading').eq(i).html(Data.item[i].ititle);
            $('.itemholder .ilogo').eq(i).attr('src', Data.item[i].iimage);
        }
    });
 
});


