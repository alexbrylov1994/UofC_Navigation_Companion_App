/*
 * JS for Food generated by Appery.io
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

function Food_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'Food_mobilebutton_2',
        'mobilelist_5': 'Food_mobilelist_5',
        'mobilelistitem_6': 'Food_mobilelistitem_6',
        'mobilelistitembutton_7': 'Food_mobilelistitembutton_7',
        'mobilenavbar_3': 'Food_mobilenavbar_3',
        'mobilenavbaritem_4': 'Food_mobilenavbaritem_4'
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

    Apperyio.CurrentScreen = 'Food';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Food_onLoad = function() {
            Food_elementsExtraJS();

            Food_deviceEvents();
            Food_windowEvents();
            Food_elementsEvents();
        };

    // screen window events


    function Food_windowEvents() {

        $('#Food').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Food_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Food_elementsExtraJS() {
        // screen (Food) extra code

        /* mobilelist_5 */

        listView = $("#Food_mobilelist_5");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Food_mobilelist_5 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_6 */

    };

    // screen elements handler


    function Food_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Food_mobileheader [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Services', {
                        reverse: false
                    });

                }
            },
        }, '#Food_mobileheader [name="mobilebutton_2"]');

        $(document).off("click", '#Food_mobilecontainer [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('MenuToujours', {
                        reverse: false
                    });

                }
            },
        }, '#Food_mobilecontainer [name="mobilelistitem_6"]');

        $(document).off("click", '#Food_mobilefooter [name="mobilenavbaritem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Food_mobilefooter [name="mobilenavbaritem_4"]');

    };

    $(document).off("pagebeforeshow", "#Food").on("pagebeforeshow", "#Food", function(event, ui) {
        Apperyio.CurrentScreen = "Food";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Food_onLoad();
};

$(document).off("pagecreate", "#Food").on("pagecreate", "#Food", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Food_js();
});