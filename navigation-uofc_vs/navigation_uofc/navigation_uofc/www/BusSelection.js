/*
 * JS for BusSelection generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '3c35a8c9-8dd3-4ac5-b1cb-67446d582dfb';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "SafewalkAlerts",
    "location": "SafewalkAlerts.html"
}, {
    "name": "MCampus",
    "location": "MCampus.html"
}, {
    "name": "MParkingLots",
    "location": "MParkingLots.html"
}, {
    "name": "FindClass",
    "location": "FindClass.html"
}, {
    "name": "Services",
    "location": "Services.html"
}, {
    "name": "ParkadeMapsLocations",
    "location": "ParkadeMapsLocations.html"
}, {
    "name": "Newsfeed",
    "location": "Newsfeed.html"
}, {
    "name": "MBusStop",
    "location": "MBusStop.html"
}, {
    "name": "PublicTransit",
    "location": "PublicTransit.html"
}, {
    "name": "MToujours",
    "location": "MToujours.html"
}, {
    "name": "Emergency",
    "location": "Emergency.html"
}, {
    "name": "MStudyAreas",
    "location": "MStudyAreas.html"
}, {
    "name": "BusSelection",
    "location": "BusSelection.html"
}, {
    "name": "MWashrooms",
    "location": "MWashrooms.html"
}, {
    "name": "MAED",
    "location": "MAED.html"
}, {
    "name": "Home",
    "location": "Home.html"
}, {
    "name": "MComp",
    "location": "MComp.html"
}, {
    "name": "BugReport",
    "location": "BugReport.html"
}, {
    "name": "MExits",
    "location": "MExits.html"
}, {
    "name": "MFE",
    "location": "MFE.html"
}, {
    "name": "ClassroomAvailability",
    "location": "ClassroomAvailability.html"
}, {
    "name": "Parkade",
    "location": "Parkade.html"
}, {
    "name": "MenuToujours",
    "location": "MenuToujours.html"
}, {
    "name": "Heritage_south20",
    "location": "Heritage_south20.html"
}, {
    "name": "Heritage_north20",
    "location": "Heritage_north20.html"
}, {
    "name": "SuccessfulSubmission",
    "location": "SuccessfulSubmission.html"
}, {
    "name": "Food",
    "location": "Food.html"
}];

function BusSelection_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'BusSelection_mobilebutton_2',
        'mobilelist_11': 'BusSelection_mobilelist_11',
        'mobilelistitem_12': 'BusSelection_mobilelistitem_12',
        'mobilelistitembutton_13': 'BusSelection_mobilelistitembutton_13',
        'mobilelistitem_14': 'BusSelection_mobilelistitem_14',
        'mobilelistitembutton_15': 'BusSelection_mobilelistitembutton_15',
        'mobilenavbar_7': 'BusSelection_mobilenavbar_7',
        'mobilenavbaritem_8': 'BusSelection_mobilenavbaritem_8'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'BusSelection';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var BusSelection_onLoad = function() {
            BusSelection_elementsExtraJS();

            BusSelection_deviceEvents();
            BusSelection_windowEvents();
            BusSelection_elementsEvents();
        };

    // screen window events


    function BusSelection_windowEvents() {

        $('#BusSelection').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function BusSelection_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function BusSelection_elementsExtraJS() {
        // screen (BusSelection) extra code

        /* mobilelist_11 */

        listView = $("#BusSelection_mobilelist_11");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#BusSelection_mobilelist_11 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_12 */

        /* mobilelistitem_14 */

    };

    // screen elements handler


    function BusSelection_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#BusSelection_mobileheader [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('PublicTransit', {
                        reverse: false
                    });

                }
            },
        }, '#BusSelection_mobileheader [name="mobilebutton_2"]');

        $(document).off("click", '#BusSelection_mobilecontainer [name="mobilelistitem_12"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Heritage_north20', {
                        reverse: false
                    });

                }
            },
        }, '#BusSelection_mobilecontainer [name="mobilelistitem_12"]');

        $(document).off("click", '#BusSelection_mobilecontainer [name="mobilelistitem_14"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Heritage_south20', {
                        reverse: false
                    });

                }
            },
        }, '#BusSelection_mobilecontainer [name="mobilelistitem_14"]');

        $(document).off("click", '#BusSelection_mobilefooter [name="mobilenavbaritem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#BusSelection_mobilefooter [name="mobilenavbaritem_8"]');

    };

    $(document).off("pagebeforeshow", "#BusSelection").on("pagebeforeshow", "#BusSelection", function(event, ui) {
        Apperyio.CurrentScreen = "BusSelection";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    BusSelection_onLoad();
};

$(document).off("pagecreate", "#BusSelection").on("pagecreate", "#BusSelection", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    BusSelection_js();
});