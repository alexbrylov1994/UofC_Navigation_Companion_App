/*
 * JS for ParkadeMapsLocations generated by Appery.io
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

function ParkadeMapsLocations_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_12': 'ParkadeMapsLocations_mobilebutton_12',
        'mobilebutton_10': 'ParkadeMapsLocations_mobilebutton_10',
        'mobilebutton_11': 'ParkadeMapsLocations_mobilebutton_11',
        'mobilenavbar_2': 'ParkadeMapsLocations_mobilenavbar_2',
        'mobilenavbaritem_3': 'ParkadeMapsLocations_mobilenavbaritem_3'
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

    Apperyio.CurrentScreen = 'ParkadeMapsLocations';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var ParkadeMapsLocations_onLoad = function() {
            ParkadeMapsLocations_elementsExtraJS();

            ParkadeMapsLocations_deviceEvents();
            ParkadeMapsLocations_windowEvents();
            ParkadeMapsLocations_elementsEvents();
        };

    // screen window events


    function ParkadeMapsLocations_windowEvents() {

        $('#ParkadeMapsLocations').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function ParkadeMapsLocations_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function ParkadeMapsLocations_elementsExtraJS() {
        // screen (ParkadeMapsLocations) extra code

    };

    // screen elements handler


    function ParkadeMapsLocations_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#ParkadeMapsLocations_mobileheader [name="mobilebutton_12"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#ParkadeMapsLocations_mobileheader [name="mobilebutton_12"]');

        $(document).off("click", '#ParkadeMapsLocations_mobilecontainer [name="mobilebutton_10"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Parkade', {
                        reverse: false
                    });

                }
            },
        }, '#ParkadeMapsLocations_mobilecontainer [name="mobilebutton_10"]');
        $(document).off("click", '#ParkadeMapsLocations_mobilecontainer [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('MParkingLots', {
                        reverse: false
                    });

                }
            },
        }, '#ParkadeMapsLocations_mobilecontainer [name="mobilebutton_11"]');

        $(document).off("click", '#ParkadeMapsLocations_mobilefooter [name="mobilenavbaritem_3"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#ParkadeMapsLocations_mobilefooter [name="mobilenavbaritem_3"]');

    };

    $(document).off("pagebeforeshow", "#ParkadeMapsLocations").on("pagebeforeshow", "#ParkadeMapsLocations", function(event, ui) {
        Apperyio.CurrentScreen = "ParkadeMapsLocations";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    ParkadeMapsLocations_onLoad();
};

$(document).off("pagecreate", "#ParkadeMapsLocations").on("pagecreate", "#ParkadeMapsLocations", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    ParkadeMapsLocations_js();
});