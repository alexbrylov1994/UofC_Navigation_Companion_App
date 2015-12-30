/*
 * JS for MAED generated by Appery.io
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

function MAED_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_3': 'MAED_mobilebutton_3',
        'html_2': 'MAED_html_2',
        'mobilenavbar_4': 'MAED_mobilenavbar_4',
        'mobilenavbaritem_5': 'MAED_mobilenavbaritem_5'
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

    Apperyio.CurrentScreen = 'MAED';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var MAED_onLoad = function() {
            MAED_elementsExtraJS();

            MAED_deviceEvents();
            MAED_windowEvents();
            MAED_elementsEvents();
        };

    // screen window events


    function MAED_windowEvents() {

        $('#MAED').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function MAED_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function MAED_elementsExtraJS() {
        // screen (MAED) extra code

    };

    // screen elements handler


    function MAED_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#MAED_mobileheader [name="mobilebutton_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Services', {
                        reverse: false
                    });

                }
            },
        }, '#MAED_mobileheader [name="mobilebutton_3"]');

        $(document).off("click", '#MAED_mobilefooter [name="mobilenavbaritem_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#MAED_mobilefooter [name="mobilenavbaritem_5"]');

    };

    $(document).off("pagebeforeshow", "#MAED").on("pagebeforeshow", "#MAED", function(event, ui) {
        Apperyio.CurrentScreen = "MAED";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    MAED_onLoad();
};

$(document).off("pagecreate", "#MAED").on("pagecreate", "#MAED", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    MAED_js();
});