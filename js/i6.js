(function(a) { "use strict"; var b = { init: function() { a(document).ready(function() {!a(".wpr-template-popup").length || b.editorCheck() || (b.openPopupInit(), b.closePopupInit()) }) }, openPopupInit: function() { a(".wpr-template-popup").each(function() { var c = a(this),
                    d = b.getID(c); if (b.checkAvailability(d) && b.checkStopShowingAfterDate(c)) { b.setLocalStorage(c, "show"); var e = JSON.parse(localStorage.getItem("WprPopupSettings")),
                        f = e[d]; if (!b.checkAvailableDevice(c, f)) return !1; if (b.popupTriggerInit(c), "load" === f.popup_trigger) { var g = 1e3 * f.popup_load_delay;
                        a(window).on("load", function() { setTimeout(function() { b.openPopup(c, f) }, g) }) } else if ("scroll" === f.popup_trigger) a(window).on("scroll", function() { var d = a(window).scrollTop() / (a(document).height() - a(window).height()),
                            d = Math.round(100 * d);
                        d >= f.popup_scroll_progress && !c.hasClass("wpr-popup-open") && b.openPopup(c, f) });
                    else if ("element-scroll" === f.popup_trigger) a(window).on("scroll", function() { var d = a(f.popup_element_scroll),
                            e = a(window).scrollTop() + a(window).height();
                        d.length && (!(d.offset().top < e) || c.hasClass("wpr-popup-open") || b.openPopup(c, f)) });
                    else if ("date" === f.popup_trigger) { var h = Date.now(),
                            i = Date.parse(f.popup_specific_date);
                        i < h && setTimeout(function() { b.openPopup(c, f) }, 1e3) } else if ("inactivity" === f.popup_trigger) { var j = null,
                            k = 1e3 * f.popup_inactivity_time;
                        a("*").bind("mousemove click keyup scroll resize", function() { c.hasClass("wpr-popup-open") || (clearTimeout(j), j = setTimeout(function() { b.openPopup(c, f) }, k)) }), a("body").trigger("mousemove") } else "exit" === f.popup_trigger ? a(document).on("mouseleave", "body", function() { c.hasClass("wpr-popup-open") || b.openPopup(c, f) }) : "custom" === f.popup_trigger && (a(f.popup_custom_trigger).on("click", function() { b.openPopup(c, f) }), a(f.popup_custom_trigger).css("cursor", "pointer")); if ("0px" !== c.find(".wpr-popup-container-inner").css("height")) { new PerfectScrollbar(c.find(".wpr-popup-container-inner")[0]) } } }) }, openPopup: function(c, d) { "notification" === d.popup_display_as && (c.addClass("wpr-popup-notification"), setTimeout(function() { a("body").animate({ "padding-top": c.find(".wpr-popup-container").outerHeight() + "px" }, 1e3 * d.popup_animation_duration, "linear") }, 10)), d.popup_disable_page_scroll && "modal" === d.popup_display_as && a("body").css("overflow", "hidden"), c.addClass("wpr-popup-open").show(), c.find(".wpr-popup-container").addClass("animated " + d.popup_animation), a(".wpr-popup-overlay").hide().fadeIn(), c.find(".wpr-popup-close-btn").css("opacity", "0"), setTimeout(function() { c.find(".wpr-popup-close-btn").animate({ opacity: "1" }, 500) }, 1e3 * d.popup_close_button_display_delay), !1 !== d.popup_automatic_close_switch && setTimeout(function() { b.closePopup(c) }, 1e3 * d.popup_automatic_close_delay) }, closePopupInit: function() { a(".wpr-popup-close-btn").on("click", function() { b.closePopup(a(this).closest(".wpr-template-popup")) }), a(".wpr-popup-overlay").on("click", function() { var c = a(this).closest(".wpr-template-popup"),
                    d = b.getID(c),
                    e = b.getLocalStorage(d);!1 == e.popup_overlay_disable_close && b.closePopup(c) }), a(document).on("keyup", function(c) { var d = a(".wpr-popup-open"); if (d.length) { var e = b.getID(d),
                        f = b.getLocalStorage(e);
                    27 == c.keyCode && !1 == f.popup_disable_esc_key && b.closePopup(d) } }) }, closePopup: function(c) { var d = b.getID(c),
                e = b.getLocalStorage(d); "notification" === e.popup_display_as && a("body").css("padding-top", 0), b.setLocalStorage(c, "hide"), "modal" === e.popup_display_as ? c.fadeOut() : c.hide(), a("body").css("overflow", "visible") }, popupTriggerInit: function(c) { var d = c.find(".wpr-popup-trigger-button");
            d.length && d.on("click", function() { var d = JSON.parse(localStorage.getItem("WprPopupSettings")) || {},
                    e = a(this).attr("data-trigger"),
                    f = a(this).attr("data-show-delay"),
                    g = a(this).attr("data-redirect"),
                    h = a(this).attr("data-redirect-url"),
                    i = b.getID(c); "close" === e ? (d[i].popup_show_again_delay = parseInt(f, 10), d[i].popup_close_time = Date.now()) : "close-permanently" === e ? (d[i].popup_show_again_delay = parseInt(f, 10), d[i].popup_close_time = Date.now()) : "back" === e && window.history.back(), b.closePopup(c), localStorage.setItem("WprPopupSettings", JSON.stringify(d)), "back" !== e && "yes" === g && setTimeout(function() { window.location.href = h }, 100) }) }, getLocalStorage: function(a) { var b = JSON.parse(localStorage.getItem("WprPopupSettings")); if (null == b) return !1; var c = b[a]; return null != c && c }, setLocalStorage: function(a, c) { var d = b.getID(a),
                e = JSON.parse(a.attr("data-settings")),
                f = JSON.parse(localStorage.getItem("WprPopupSettings")) || {};
            f[d] = e, f[d].popup_close_time = !("hide" !== c) && Date.now(), localStorage.setItem("WprPopupSettings", JSON.stringify(f)) }, checkStopShowingAfterDate: function(a) { var b = JSON.parse(a.attr("data-settings")),
                c = Date.now(); return !("yes" === b.popup_stop_after_date && c >= Date.parse(b.popup_stop_after_date_select)) }, checkAvailability: function(c) { var d = a("#wpr-popup-id-" + c),
                e = JSON.parse(d.attr("data-settings")),
                f = window.location.href; if ("yes" !== e.popup_show_via_referral || -1 !== f.indexOf("wpr_templates=user-popup") || -1 != f.indexOf(e.popup_referral_keyword)) { if (!1 === b.getLocalStorage(c)) return !0; var g = d.find(".wpr-popup-trigger-button"),
                    h = g.attr("data-show-delay"),
                    i = Date.now(),
                    j = b.getLocalStorage(c); if (h) { var k = !0; if (g.each(function() { var b = a(this).attr("data-show-delay");
                            j.popup_show_again_delay == parseInt(b, 10) && (k = !1) }), !0 == k) return !0 } else if (j.popup_show_again_delay != e.popup_show_again_delay) return !0; var l = j.popup_close_time || 0,
                    m = parseInt(j.popup_show_again_delay, 10); return !(l + m >= i) } }, checkAvailableDevice: function(b, c) { var d = a("body").prop("clientWidth"); return 1024 < d ? !!c.popup_show_on_device : 768 < d ? !!c.popup_show_on_device_tablet : !!c.popup_show_on_device_mobile }, getID: function(a) { var b = a.attr("id"); return b.replace("wpr-popup-id-", "") }, editorCheck: function() { return !!a("body").hasClass("elementor-editor-active") } };
    b.init() })(jQuery, window.elementorFrontend);