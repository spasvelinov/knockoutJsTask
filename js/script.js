requirejs.config({
    baseUrl: 'js'
});

define(['jquery'], function ($) {

    createTicket();
    saveTicket();
    saveEditedTicket();
    hideTicket();
    clearStorage();
    editTicket();
    getTicketData();
    retrieveTicket();

    function createTicket(){
        $('#create').click(function() {
            $('.save-ticket').show();
            $('.tickets').hide();
        });
    }

    function hideTicket(){
        var ticket = JSON.parse(localStorage.getItem('ticket'));
        if(ticket){
            $('#ticket').show();
        } else {
            $('#ticket').hide();
        }
    }

    function saveTicket() {
        $('#save').on('click', function() {
            storeLocalStorage();
        });
    }

    function saveEditedTicket() {
        $('#save-edited').on('click', function() {
            redirect();
            storeLocalStorage();
        });
    }

    function storeLocalStorage(){
        var title = $('#title').val();
        var description = $('#description').val();
        var assigned = $('#assigned').val();
        var status = $('#status').val();
    
        const ticket = {
            title: title,
            description: description,
            assigned: assigned,
            status: status,
        }
        localStorage.setItem('ticket',JSON.stringify(ticket));
    }

    function clearStorage(){
        $('#delete').click(function() {
            localStorage.clear();
            hideTicket();
            $(document).ready(function () {
                if(window.location.href.indexOf("edit") > -1) 
                {
                    window.location.href = 'index.html';
                }
                return false; 
            }); 
        });
    }

    function retrieveTicket(){
        var ticket = JSON.parse(localStorage.getItem('ticket'));
        $('.ticket-title').html(ticket.title);
        $('.ticket-description').html(ticket.description);
        $('.ticket-assigned').html(ticket.assigned);
        $('.ticket-status').html(ticket.status);
    }

    function editTicket(){
        $('#edit').click(function() {
            redirect();
        });
    }

    function redirect(){
        $(document).ready(function () {
            if(window.location.href.indexOf("index") > -1) 
            {
                window.location.href = 'edit.html';
            } else {
                window.location.href = 'index.html';
            }
            return false; 
        });   
    }

    function getTicketData(){
        $(document).ready(function () {
            if(window.location.href.indexOf("edit") > -1) {
                var ticket = JSON.parse(localStorage.getItem('ticket'));
                $('.edit-ticket #title').val(ticket.title);
                $('.edit-ticket #description').val(ticket.description);
                $('.edit-ticket #assigned').val(ticket.assigned);
                $('.edit-ticket #status').val(ticket.status);
            }
        });
    }

});
