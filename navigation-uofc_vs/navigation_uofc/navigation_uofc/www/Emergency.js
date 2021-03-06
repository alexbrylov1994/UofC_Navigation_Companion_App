/*
 * JS for Emergency generated by Appery.io
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

function Emergency_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_10': 'Emergency_mobilebutton_10',
        'mobilelist_11': 'Emergency_mobilelist_11',
        'mobilelistitem_12': 'Emergency_mobilelistitem_12',
        'mobilelistitembutton_13': 'Emergency_mobilelistitembutton_13',
        'mobilelistitem_14': 'Emergency_mobilelistitem_14',
        'mobilelistitembutton_15': 'Emergency_mobilelistitembutton_15',
        'mobilelistitem_16': 'Emergency_mobilelistitem_16',
        'mobilelistitembutton_17': 'Emergency_mobilelistitembutton_17',
        'mobilelistitem_18': 'Emergency_mobilelistitem_18',
        'mobilelistitembutton_19': 'Emergency_mobilelistitembutton_19',
        'mobilenavbar_6': 'Emergency_mobilenavbar_6',
        'mobilenavbaritem_7': 'Emergency_mobilenavbaritem_7'
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

    Apperyio.CurrentScreen = 'Emergency';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Emergency_onLoad = function() {
            Emergency_elementsExtraJS();

            Emergency_deviceEvents();
            Emergency_windowEvents();
            Emergency_elementsEvents();
        };

    // screen window events


    function Emergency_windowEvents() {

        $('#Emergency').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Emergency_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Emergency_elementsExtraJS() {
        // screen (Emergency) extra code

        /* mobilelist_11 */

        listView = $("#Emergency_mobilelist_11");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Emergency_mobilelist_11 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_12 */

        /* mobilelistitem_14 */

        /* mobilelistitem_16 */

        /* mobilelistitem_18 */

    };

    // screen elements handler


    function Emergency_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Emergency_mobileheader [name="mobilebutton_10"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobileheader [name="mobilebutton_10"]');

        $(document).off("click", '#Emergency_mobilecontainer [name="mobilelistitem_12"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('MExits', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobilecontainer [name="mobilelistitem_12"]');

        $(document).off("click", '#Emergency_mobilecontainer [name="mobilelistitem_14"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('MFE', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobilecontainer [name="mobilelistitem_14"]');

        $(document).off("click", '#Emergency_mobilecontainer [name="mobilelistitem_16"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('MAED', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobilecontainer [name="mobilelistitem_16"]');

        $(document).off("click", '#Emergency_mobilecontainer [name="mobilelistitem_18"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('SafewalkAlerts', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobilecontainer [name="mobilelistitem_18"]');

        $(document).off("click", '#Emergency_mobilefooter [name="mobilenavbaritem_7"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Emergency_mobilefooter [name="mobilenavbaritem_7"]');

    };

    $(document).off("pagebeforeshow", "#Emergency").on("pagebeforeshow", "#Emergency", function(event, ui) {
        Apperyio.CurrentScreen = "Emergency";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Emergency_onLoad();
};

$(document).off("pagecreate", "#Emergency").on("pagecreate", "#Emergency", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Emergency_js();
});