/*
 * JS for Parkade generated by Appery.io
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

function Parkade_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'Parkade_mobilebutton_2',
        'mobilegrid_7': 'Parkade_mobilegrid_7',
        'mobilegridcell_8': 'Parkade_mobilegridcell_8',
        'parking_lot': 'Parkade_parking_lot',
        'mobilegridcell_9': 'Parkade_mobilegridcell_9',
        'price': 'Parkade_price',
        'mobilegridcell_14': 'Parkade_mobilegridcell_14',
        'description': 'Parkade_description',
        'mobilenavbar_3': 'Parkade_mobilenavbar_3',
        'mobilenavbaritem_4': 'Parkade_mobilenavbaritem_4'
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

    Apperyio.mappings["Parkade_parking_info_onbeforesend_mapping_0"] = {
        "homeScreen": "Parkade",
        "directions": [

        {

            "to_name": "parking_info",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["Parkade_parking_info_onsuccess_mapping_0"] = {
        "homeScreen": "Parkade",
        "directions": [

        {
            "from_name": "parking_info",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Parkade",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['mobilegrid_7']"

            },

            {

                "source": "$['body'][i]['price']",
                "target": "$['mobilegrid_7']['parking_lot:text']"

            },

            {

                "source": "$['body'][i]['description']",
                "target": "$['mobilegrid_7']['description:text']"

            },

            {

                "source": "$['body'][i]['parking_lot']",
                "target": "$['mobilegrid_7']['price:text']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.parking_info = Apperyio.datasources.parking_info = new Apperyio.DataSource(parkade_parking_information_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Parkade_parking_info_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Parkade");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Parkade_parking_info_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Parkade';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Parkade_onLoad = function() {
            Parkade_elementsExtraJS();

            try {
                parking_info.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            Parkade_deviceEvents();
            Parkade_windowEvents();
            Parkade_elementsEvents();
        };

    // screen window events


    function Parkade_windowEvents() {

        $('#Parkade').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Parkade_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Parkade_elementsExtraJS() {
        // screen (Parkade) extra code

    };

    // screen elements handler


    function Parkade_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Parkade_mobileheader [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Parkade_mobileheader [name="mobilebutton_2"]');

        $(document).off("click", '#Parkade_mobilefooter [name="mobilenavbaritem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Parkade_mobilefooter [name="mobilenavbaritem_4"]');

    };

    $(document).off("pagebeforeshow", "#Parkade").on("pagebeforeshow", "#Parkade", function(event, ui) {
        Apperyio.CurrentScreen = "Parkade";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Parkade_onLoad();
};

$(document).off("pagecreate", "#Parkade").on("pagecreate", "#Parkade", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Parkade_js();
});