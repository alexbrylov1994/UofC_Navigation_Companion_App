/*
 * JS for Heritage_south20 generated by Appery.io
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

function Heritage_south20_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_41': 'Heritage_south20_mobilebutton_41',
        'mobilecarousel_21': 'Heritage_south20_mobilecarousel_21',
        'mobilecarouselitem_22': 'Heritage_south20_mobilecarouselitem_22',
        'mobilelabel_25': 'Heritage_south20_mobilelabel_25',
        'morning_grid': 'Heritage_south20_morning_grid',
        'mobilegridcell_29': 'Heritage_south20_mobilegridcell_29',
        'morning_label': 'Heritage_south20_morning_label',
        'mobilecarouselitem_23': 'Heritage_south20_mobilecarouselitem_23',
        'mobilelabel_26': 'Heritage_south20_mobilelabel_26',
        'afternoon_grid': 'Heritage_south20_afternoon_grid',
        'mobilegridcell_34': 'Heritage_south20_mobilegridcell_34',
        'afternoon_label': 'Heritage_south20_afternoon_label',
        'mobilecarouselitem_24': 'Heritage_south20_mobilecarouselitem_24',
        'mobilelabel_27': 'Heritage_south20_mobilelabel_27',
        'evening_grid': 'Heritage_south20_evening_grid',
        'mobilegridcell_47': 'Heritage_south20_mobilegridcell_47',
        'evening_label': 'Heritage_south20_evening_label',
        'mobilenavbar_42': 'Heritage_south20_mobilenavbar_42',
        'mobilenavbaritem_43': 'Heritage_south20_mobilenavbaritem_43'
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

    Apperyio.mappings["Heritage_south20_morning_south_onbeforesend_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {

            "to_name": "morning_south",
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

    Apperyio.mappings["Heritage_south20_morning_south_onsuccess_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {
            "from_name": "morning_south",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Heritage_south20",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['morning_grid']"

            },

            {

                "source": "$['body'][i]['time']",
                "target": "$['morning_grid']['morning_label:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Heritage_south20_afternoon_south_onbeforesend_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {

            "to_name": "afternoon_south",
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

    Apperyio.mappings["Heritage_south20_afternoon_south_onsuccess_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {
            "from_name": "afternoon_south",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Heritage_south20",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['afternoon_grid']"

            },

            {

                "source": "$['body'][i]['time']",
                "target": "$['afternoon_grid']['afternoon_label:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Heritage_south20_evening_south_onbeforesend_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {

            "to_name": "evening_south",
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

    Apperyio.mappings["Heritage_south20_evening_south_onsuccess_mapping_0"] = {
        "homeScreen": "Heritage_south20",
        "directions": [

        {
            "from_name": "evening_south",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Heritage_south20",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][i]",
                "target": "$['evening_grid']"

            },

            {

                "source": "$['body'][i]['time']",
                "target": "$['evening_grid']['evening_label:text']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.morning_south = Apperyio.datasources.morning_south = new Apperyio.DataSource(Heritage_Southmount_20_morning_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_morning_south_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Heritage_south20");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_morning_south_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.afternoon_south = Apperyio.datasources.afternoon_south = new Apperyio.DataSource(Heritage_Southmount_20_afternoon_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_afternoon_south_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Heritage_south20");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_afternoon_south_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.evening_south = Apperyio.datasources.evening_south = new Apperyio.DataSource(Heritage_Southmount_20_evening_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_evening_south_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Heritage_south20");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Heritage_south20_evening_south_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Heritage_south20';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Heritage_south20_onLoad = function() {
            Heritage_south20_elementsExtraJS();

            try {
                morning_south.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            try {
                afternoon_south.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
            try {
                evening_south.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };

            Heritage_south20_deviceEvents();
            Heritage_south20_windowEvents();
            Heritage_south20_elementsEvents();
        };

    // screen window events


    function Heritage_south20_windowEvents() {

        $('#Heritage_south20').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Heritage_south20_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Heritage_south20_elementsExtraJS() {
        // screen (Heritage_south20) extra code

        /* mobilecarousel_21*/
        var mobilecarousel_21_options = {
            indicatorsListClass: "ui-carousel-indicators",
            showIndicator: true,
            showTitle: true,
            titleBuildIn: false,
            titleIsText: true,
            animationDuration: 250,
            useLegacyAnimation: false,
            enabled: true,
        }
        Apperyio.__registerComponent('mobilecarousel_21', new Apperyio.ApperyMobileCarouselComponent("Heritage_south20_mobilecarousel_21", mobilecarousel_21_options));

        $("#Heritage_south20_mobilecarouselitem_22").attr("reRender", "mobilecarousel_21");

        $("#Heritage_south20_mobilecarouselitem_23").attr("reRender", "mobilecarousel_21");

        $("#Heritage_south20_mobilecarouselitem_24").attr("reRender", "mobilecarousel_21");

    };

    // screen elements handler


    function Heritage_south20_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Heritage_south20_mobileheader [name="mobilebutton_41"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('BusSelection', {
                        reverse: false
                    });

                }
            },
        }, '#Heritage_south20_mobileheader [name="mobilebutton_41"]');

        $(document).off("click", '#Heritage_south20_mobilefooter [name="mobilenavbaritem_43"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Home', {
                        reverse: false
                    });

                }
            },
        }, '#Heritage_south20_mobilefooter [name="mobilenavbaritem_43"]');

    };

    $(document).off("pagebeforeshow", "#Heritage_south20").on("pagebeforeshow", "#Heritage_south20", function(event, ui) {
        Apperyio.CurrentScreen = "Heritage_south20";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Heritage_south20_onLoad();
};

$(document).off("pagecreate", "#Heritage_south20").on("pagecreate", "#Heritage_south20", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Heritage_south20_js();
});