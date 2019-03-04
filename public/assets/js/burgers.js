$(function () {
    $("#create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        if($('#burger-name').val() == "") {
            alert('Please order a burger before clicking submit.');
        } else {
            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function() {
                console.log('burger created');
                location.reload();
            });
        }
    });

    $('.eat-burger').on('click', function(event) {
        event.preventDefault();

        var burgerState = {
            devoured: 1
        }

        $.ajax('/api/burgers/' + this.id, {
            type: 'PUT',
            data: burgerState
        }).then(function() {
            console.log('burger devoured');
            location.reload();
        })
    })
});