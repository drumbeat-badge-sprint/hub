/*
 * Hub access library
 */

;Hub = (function() {
    var iframe = document.createElement("iframe");

    iframe.src = "http://hub/hub.html";
    iframe.style.display = 'none';

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(iframe);

    try {
	var s_channel = Channel.build({
            window: iframe.contentWindow,
            origin: "*",
            scope: "hub"
	});
    } catch (e) {
	alert(e);
    }

    return {
        saveBadge: function(badge, onsuccess) {
            s_channel.call({method: "badge_put", params: badge, success: onsuccess});
        },
        getBadges: function(filter, onsuccess) {
            s_channel.call({method: "badge_get", params: filter, success: onsuccess});
        },
        _clear: function(onsuccess) {
	    s_channel.call({method: "badge_clear", params: {}, success: onsuccess});
	}
    }
})();
