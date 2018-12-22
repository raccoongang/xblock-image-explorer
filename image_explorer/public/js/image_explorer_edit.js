function ImageExplorerEditBlock(runtime, element) {
    var xmlEditor = $('.block-xml-editor', element);

    $(element).find('.save-button').bind('click', function() {
        var data = {
            'display_name': $(element).find('.edit-display-name').val(),
            'hotspot_coordinates_centered': $('.edit-hotspot-coordinates-centered', element).is(':checked'),
            'data': xmlEditor.val(),
        };
        var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
        $('.xblock-editor-error-message', element).html();
        $('.xblock-editor-error-message', element).css('display', 'none');
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
            if (response.result === 'success') {
                window.location.reload(false);
            } else {
                $('.xblock-editor-error-message', element).html('Error: '+response.message);
                $('.xblock-editor-error-message', element).css('display', 'block');
            }
        });
    });

    $(element).find('.cancel-button').bind('click', function() {
        runtime.notify('cancel', {});
    });
}
