/*
 * JS for Newsfeed generated by Appery.io
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

function Newsfeed_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_22': 'Newsfeed_mobilebutton_22',
        'mobilegrid_9': 'Newsfeed_mobilegrid_9',
        'mobilegridcell_10': 'Newsfeed_mobilegridcell_10',
        'link': 'Newsfeed_link',
        'mobilegridcell_12': 'Newsfeed_mobilegridcell_12',
        'pubDate': 'Newsfeed_pubDate',
        'mobilegridcell_14': 'Newsfeed_mobilegridcell_14',
        'html_21': 'Newsfeed_html_21',
        'mobilenavbar_23': 'Newsfeed_mobilenavbar_23',
        'mobilenavbaritem_24': 'Newsfeed_mobilenavbaritem_24'
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

    Apperyio.mappings["Newsfeed_events_database_onbeforesend_mapping_0"] = {
        "homeScreen": "Newsfeed",
        "directions": [

        {

            "to_name": "events_database",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Brand": "e939c3ce-87bb-4fac-b601-ba0f63db64ab"
                },
                "parameters": {},
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["Newsfeed_events_database_onsuccess_mapping_0"] = {
        "homeScreen": "Newsfeed",
        "directions": [

        {
            "from_name": "events_database",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Newsfeed",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body']['rss']['channel']['item'][i]",
                "target": "$['mobilegrid_9']"

            },

            {

                "source": "$['body']['rss']['channel']['item'][i]['title']",
                "target": "$['mobilegrid_9']['link:text']"

            },

            {

                "source": "$['body']['rss']['channel']['item'][i]['link']",
                "target": "$['mobilegrid_9']['link:url']"

            },

            {

                "source": "$['body']['rss']['channel']['item'][i]['description']",
                "target": "$['mobilegrid_9']['html_21:rawHtml']"

            },

            {

                "source": "$['body']['rss']['channel']['item'][i]['pubDate']",
                "target": "$['mobilegrid_9']['pubDate:text']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.events_database = Apperyio.datasources.events_database = new Apperyio.DataSource(UofC_News, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Newsfeed_events_database_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Newsfeed");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Newsfeed_events_database_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Newsfeed';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Newsfeed_onLoad = function() {
            Newsfeed_elementsExtraJS();

            try {
                events_database.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            Newsfeed_deviceEvents();
            Newsfeed_windowEvents();
            Newsfeed_elementsEvents();
        };

    // screen window events


    function Newsfeed_windowEvents() {

        $('#Newsfeed').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Newsfeed_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Newsfeed_elementsExtraJS() {
        // screen (Newsfeed) extra code

    };

    // screen elements handler


    function Newsfeed_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Newsfeed_mobileheader [name="mobilebutton_22"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Newsfeed_mobileheader [name="mobilebutton_22"]');

        $(document).off("click", '#Newsfeed_mobilefooter [name="mobilenavbaritem_24"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Newsfeed_mobilefooter [name="mobilenavbaritem_24"]');

    };

    $(document).off("pagebeforeshow", "#Newsfeed").on("pagebeforeshow", "#Newsfeed", function(event, ui) {
        Apperyio.CurrentScreen = "Newsfeed";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Newsfeed_onLoad();
};

$(document).off("pagecreate", "#Newsfeed").on("pagecreate", "#Newsfeed", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Newsfeed_js();
});