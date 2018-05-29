/* ///// CHARTS ///// */

/* ----- HOMICIDES BY MONTH CHART ----- */

d3.json("js/homicides-050318.json", function(data) {
    var monthCount = [];
    var monthTotal = 0;
    var yearCount = [];
    var yearTotal = 0;

    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        if (!monthCount[item.homicideMonth + item.homicideYear]) {
            monthCount[item.homicideMonth + item.homicideYear] = [];
        }
        monthCount[item.homicideMonth + item.homicideYear].push({ Month: item.homicideMonth + item.homicideYear });
        if (monthTotal < item.homicideMonth) {
            monthTotal = item.homicideMonth;
        }
    }
    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        if (!yearCount[item.homicideYear]) {
            yearCount[item.homicideYear] = [];
        }
        yearCount[item.homicideYear].push({ Year: item.homicideYear });
        if (yearTotal < item.homicideYear) {
            yearTotal = item.homicideYear;
        }
    };

    var jan2015 = monthCount.Jan2015.length;
    var feb2015 = jan2015 + monthCount.Feb2015.length;
    var mar2015 = feb2015 + monthCount.Mar2015.length;
    var apr2015 = mar2015 + monthCount.Apr2015.length;
    var may2015 = apr2015 + monthCount.May2015.length;
    var jun2015 = may2015 + monthCount.Jun2015.length;
    var jul2015 = jun2015 + monthCount.Jul2015.length;
    var aug2015 = jul2015 + monthCount.Aug2015.length;
    var sep2015 = aug2015 + monthCount.Sep2015.length;
    var oct2015 = sep2015 + monthCount.Oct2015.length;
    var nov2015 = oct2015 + monthCount.Nov2015.length;
    var dec2015 = nov2015 + monthCount.Dec2015.length;
    var jan2016 = monthCount.Jan2016.length;
    var feb2016 = jan2016 + monthCount.Feb2016.length;
    var mar2016 = feb2016 + monthCount.Mar2016.length;
    var apr2016 = mar2016 + monthCount.Apr2016.length;
    var may2016 = apr2016 + monthCount.May2016.length;
    var jun2016 = may2016 + monthCount.Jun2016.length;
    var jul2016 = jun2016 + monthCount.Jul2016.length;
    var aug2016 = jul2016 + monthCount.Aug2016.length;
    var sep2016 = aug2016 + monthCount.Sep2016.length;
    var oct2016 = sep2016 + monthCount.Oct2016.length;
    var nov2016 = oct2016 + monthCount.Nov2016.length;
    var dec2016 = nov2016 + monthCount.Dec2016.length;
    var jan2017 = monthCount.Jan2017.length;
    var feb2017 = jan2017 + monthCount.Feb2017.length;
    var mar2017 = feb2017 + monthCount.Mar2017.length;
    var apr2017 = mar2017 + monthCount.Apr2017.length;
    var may2017 = apr2017 + monthCount.May2017.length;
    var jun2017 = may2017 + monthCount.Jun2017.length;
    var jul2017 = jun2017 + monthCount.Jul2017.length;
    var aug2017 = jul2017 + monthCount.Aug2017.length;
    var sep2017 = aug2017 + monthCount.Sep2017.length;
    var oct2017 = sep2017 + monthCount.Oct2017.length;
    var nov2017 = oct2017 + monthCount.Nov2017.length;
    var dec2017 = nov2017 + monthCount.Dec2017.length;
    var jan2018 = monthCount.Jan2018.length;
    var feb2018 = jan2018 + monthCount.Feb2018.length;
    var mar2018 = feb2018 + monthCount.Mar2018.length;
    var apr2018 = mar2018 + monthCount.Apr2018.length;
    // var may2018 = apr2018 + monthCount.May2018.length;
    // var jun2018 = may2018 + monthCount.Jun2018.length;
    // var jul2018 = jun2018 + monthCount.Jul2018.length;
    // var aug2018 = jul2018 + monthCount.Aug2018.length;
    // var sep2018 = aug2018 + monthCount.Sep2018.length;
    // var oct2018 = sep2018 + monthCount.Oct2018.length;
    // var nov2018 = oct2018 + monthCount.Nov2018.length;
    // var dec2018 = nov2018 + monthCount.Dec2018.length;

    /* -- For count displayed on index.html NOT BEING USED -- */
    var homePageTotal = yearCount[2018].length;
    $('#display-totals').html(homePageTotal);


    var homicideChart = c3.generate({
        bindto: '#homicide-chart',
        // size: {
        //     height: 500
        // },
        data: {
            x: 'x',
            columns: [
                ['x', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                ['2010', 2, 2, 3, 3, 5, 6, 9, 9, 13, 18, 22, 27],
                ['2011', 3, 5, 7, 11, 16, 19, 20, 27, 32, 33, 36, 38],
                ['2012', 1, 4, 8, 11, 13, 16, 17, 19, 20, 25, 28, 28],
                ['2013', 4, 6, 9, 14, 16, 17, 21, 25, 28, 32, 34, 36],
                ['2014', 2, 3, 7, 8, 10, 12, 15, 20, 21, 24, 27, 28],
                // ['2015', 4, 7, 12, 17, 19, 20, 27, 32, 39, 42, 49, 50],
                // ['2016', 4, 7, 9, 14, 15, 20, 28, 30, 33, 45, 55, 56],
                // ['2017', 4, 8, 9, 16, 21, 24, 32, 33]
                ['2015', jan2015, feb2015, mar2015, apr2015, may2015, jun2015, jul2015, aug2015, sep2015, oct2015, nov2015, dec2015],
                ['2016', jan2016, feb2016, mar2016, apr2016, may2016, jun2016, jul2016, aug2016, sep2016, oct2016, nov2016, dec2016],
                ['2017', jan2017, feb2017, mar2017, apr2017, may2017, jun2017, jul2017, aug2017, sep2017, oct2017, nov2017, dec2017],
                ['2018', jan2018, feb2018, mar2018, apr2018/*, may2018, jun2018, jul2018, aug2018, sep2018, oct2018, nov2018, dec2018 */ ]
            ],
            colors: {
                '2010': '#bbb',
                '2011': '#bbb',
                '2012': '#bbb',
                '2013': '#bbb',
                '2014': '#bbb',
                '2015': '#bbb',
                '2016': '#bbb',
                '2017': 'rgba(142,16,36,.5)',
                '2018': 'rgba(142,16,36,1)'
            }
        },
        grid: {
            x: {
                show: false
            },
            y: {
                show: true
                // lines: [{
                //     value: 6,
                //     text: '6 innings',
                //     axis: 'y'
                // }]
            },
        },
        legend: {
            position: 'bottom'
        },
        axis: {
            x: {
                type: 'category', // this needed to load string x value
                tick: {
                    rotate: 45
                }
            },
            y: {
                label: {
                    text: 'Number of homicides (cumulative)',
                    position: 'outer-middle'
                }
            },
        },
    });
});

/* ----- SIDEBAR CHARTS ----- */

d3.json("js/homicides-050318.json", function(data) {
    var genderCount = [];
    var causeCount = [];
    var categoryTotal = 0;

    /* ----- HOMICIDES BY NEIGHBORHOOD CHART ----- */

    var neighborhoodCount = [];
    var categoryTotal = 0;

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (!neighborhoodCount[item.neighborhood]) {
            neighborhoodCount[item.neighborhood] = [];
        }
        neighborhoodCount[item.neighborhood].push({ Neighborhood: item.neighborhood });
        if (categoryTotal < item.neighborhood) {
            categoryTotal = item.neighborhood;
        }
    }
    var fivePoints = neighborhoodCount['Five Points'].length;
    var montbello = neighborhoodCount.Montbello.length;
    var eastColfax = neighborhoodCount['East Colfax'].length;
    var northeastParkHill = neighborhoodCount['Northeast Park Hill'].length;
    var cole = neighborhoodCount.Cole.length;
    var elyriaSwansea = neighborhoodCount['Elyria Swansea'].length;
    var westwood = neighborhoodCount.Westwood.length;
    // var gatewayGreenValleyRanch = neighborhoodCount['Gateway-Green Valley Ranch'].length;
    var others = data.length - (fivePoints + montbello + eastColfax + northeastParkHill + cole + elyriaSwansea + westwood);

    var neighborhoodChart = c3.generate({
        bindto: '#homicide-neighborhoods',
        size: {
            height: 325
        },
        data: {
            columns: [
                ['Five Points', fivePoints],
                ['Montbello', montbello],
                ['East Colfax', eastColfax],
                ['Northeast Park Hill', northeastParkHill],
                ['Westwood', westwood],
                // ['Cole', cole],
                // ['Elyria Swansea', elyriaSwansea],
                // ['Gateway-Green Valley Ranch', gatewayGreenValleyRanch],
                ['Others', others]

            ],
            type: 'donut',
        },
        donut: {
            label: {
                format: function(value) { return value; }
            }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        color: {
            pattern: ['#08306b', '#08519c', '#2171b5', '#4292c6', '#6baed6', '#9ecae1', '#c6dbef', /*'#deebf7',*/ '#ccc']
        }
    });

    /* ----- HOMICIDES BY SEX CHART----- */

    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        // var homicideCount = data.length;
        if (!genderCount[item.victimGender + item.homicideYear]) {
            genderCount[item.victimGender + item.homicideYear] = [];
        }
        genderCount[item.victimGender + item.homicideYear].push({ Gender: item.victimGender + item.homicideYear });
        if (categoryTotal < item.victimGender) {
            categoryTotal = item.victimGender;
        }
    }
    var sexChart = c3.generate({
        bindto: '#homicide-sex',
        size: {
            height: 275
        },
        data: {
            x: 'x',
            columns: [
                ['x', 'Male', 'Female'],
                ['2018', genderCount.Male2018.length, genderCount.Female2018.length],
                ['2017', genderCount.Male2017.length, genderCount.Female2017.length],
                ['2016', genderCount.Male2016.length, genderCount.Female2016.length],
                ['2015', genderCount.Male2015.length, genderCount.Female2015.length]

            ],
            type: 'bar',
            colors: {
                '2015': '#ccc',
                '2016': '#bbb',
                '2017': '#aaa',
                '2018': 'rgba(142,16,36,1)'
            },
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        axis: {
            x: {
                type: 'category'
            }
        },
        grid: {
            y: {
                show: true
            }
        }
    });
});

/* ///// MAP ///// */

var neighborhoods = new L.LayerGroup();
// var census = new L.LayerGroup();
var homicides2018 = new L.LayerGroup();
var homicides2017 = new L.LayerGroup();
var homicides2016 = new L.LayerGroup();
var homicides2015 = new L.LayerGroup();

var streetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

var stamenMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

var baseLayers = {
    "Monochrome map": stamenMap,
    "Street map": streetMap
    // "Satellite map": satellite
};

// grouped layer control from http://bl.ocks.org/ismyrnow/6123517
var groupedOverlays = {
    "Background": {
        "Neighborhoods": neighborhoods
        // "Income levels": census
    },
    "Homicides": {
        "2018": homicides2018,
        "2017": homicides2017,
        "2016": homicides2016,
        "2015": homicides2015
    }
};

// map from http://bl.ocks.org/awoodruff/3ce5d735126a56dfff94
// initialize the map
var map = L.map('map', {
    center: [39.72, -104.91],
    zoom: 12,
    scrollWheelZoom: false,
    // touchZoom: true,
    keyboard: false,
    layers: [stamenMap, neighborhoods, homicides2018, homicides2017, homicides2016, homicides2015]
});

// below from http://maptimeboston.github.io/leaflet-intro/
$.getJSON("js/homicide-neighborhoods-geojson.js", function(data) {
    L.geoJson(data, {
        style: function(feature) {
            var fillColor,
                density = feature.properties.homicides;
            if (density > 12) fillColor = "#08306b";
            else if (density > 9) fillColor = "#08519c";
            else if (density > 6) fillColor = "#2171b5";
            else if (density > 3) fillColor = "#4292c6";
            else if (density > 0) fillColor = "#6baed6";
            else fillColor = "rgba(255,255,0,.3)"; // no data
            return {
                color: "#000",
                weight: 3,
                fillColor: fillColor,
                fillOpacity: .6
            };
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                '<h4 class="neighborhood-header">' + feature.properties.nbhd_name + '</h4><hr class="popup">' + '<span class="neighborhood-total">' + feature.properties.homicides + '</span> homicide(s) since 2015'
            )
        }
    }).addTo(neighborhoods);
});

// $.getJSON("js/acs-2013-tract-geojson.js", function(data) {
//     L.geoJson(data, {
//         style: function(feature) {
//             var fillColor,
//                 density = feature.properties.med_hh_inc;
//             if (density > 100000) fillColor = "#54278f";
//             else if (density > 75000) fillColor = "#756bb1";
//             else if (density > 50000) fillColor = "#9e9ac8";
//             else if (density > 25000) fillColor = "#cbc9e2";
//             else if (density > 0) fillColor = "#f2f0f7";
//             else fillColor = "rgba(0,0,0,0)"; // no data
//             return {
//                 color: "#000",
//                 weight: 1,
//                 fillColor: fillColor,
//                 fillOpacity: .6
//             };
//         },
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup(
//                 '<strong>' + 'Tract No. ' + feature.properties.geo_name + '</strong><hr class="popup">' + 'Median income: ' + '$' + feature.properties.med_hh_inc + '<br/>' + 'Population: ' + feature.properties.ttl_popula + '<br/>' + 'Pct. under 18: ' + feature.properties.ageless18_pct + '%'
//             )
//         }
//     }).addTo(census);
// });


$.getJSON("js/homicides_2018_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-current-year',
        iconSize: [10, 10]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victimName + ', ' + feature.properties.victimAge + '</h4><br>' + '<hr class="popup">' + 'Killed on ' + '<span class="highstreetMap">' + feature.properties.homicideDate + '</span>' + ' near the ' + '<span class="highstreetMap">' + feature.properties.blockAddress + '</span>' + ' in the ' + '<span class="highstreetMap">' + feature.properties.neighborhood + '</span>' + ' neighborhood.<br>' + '<div class="spacer">Cause of death: ' + '<span class="highstreetMap">' + feature.properties.mannerOfDeath + '</span>' + '</div><p class="article-link"><a href="' + feature.properties.articleLink + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2018);
});

$.getJSON("js/homicides_2017_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });

            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Died on ' + '<span class="highstreetMap">' + feature.properties.homicide_date + '</span>' + ' near the ' + '<span class="highstreetMap">' + feature.properties.block_address + '</span>' + ' in the ' + '<span class="highstreetMap">' + feature.properties.neighborhood + '</span>' + ' neighborhood.<br>' + '<div class="spacer">Cause of death: ' + '<span class="highstreetMap">' + feature.properties.manner_of_death + '</span>' + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2017);
});

$.getJSON("js/homicides_2016_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });
            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Died on ' + '<span class="highstreetMap">' + feature.properties.homicide_date + '</span>' + ' near the ' + '<span class="highstreetMap">' + feature.properties.block_address + '</span>' + ' in the ' + '<span class="highstreetMap">' + feature.properties.neighborhood + '</span>' + ' neighborhood.<br>' + '<div class="spacer">Cause of death: ' + '<span class="highstreetMap">' + feature.properties.manner_of_death + '</span>' + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2016);
});

$.getJSON("js/homicides_2015_geojson.js", function(data) {
    var mapIcon = L.divIcon({
        //iconUrl: 'images/circle-red.png',
        className: 'icon-previous-year',
        iconSize: [8, 8]
        //iconAnchor: [6, 3],
        //popupAnchor: [-1, -5]
        // icons from https://www.iconfinder.com/icons/73019/ball_base_chartreuse_map_marker_right_tv_icon#size=32
    });
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng, {
                icon: mapIcon
            });
            marker.bindPopup(
                '<h4 class="name-header">' + feature.properties.victim_name + ', ' + feature.properties.victim_age + '</h4><br>' + '<hr class="popup">' + 'Died on ' + '<span class="highstreetMap">' + feature.properties.homicide_date + '</span>' + ' near the ' + '<span class="highstreetMap">' + feature.properties.block_address + '</span>' + ' in the ' + '<span class="highstreetMap">' + feature.properties.neighborhood + '</span>' + ' neighborhood.<br>' + '<div class="spacer">Cause of death: ' + '<span class="highstreetMap">' + feature.properties.manner_of_death + '</span>' + '</div><p class="article-link"><a href="' + feature.properties.article_link + '" target="blank">Read the story</a></p>');
            return marker;
        }
    }).addTo(homicides2015);
});
// 
L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

/* ///// TABLE ///// */

$(document).ready(function() {
    var homicideTable = $('#homicide-table').DataTable({
        ajax: {
            'url': 'js/homicides-050318.json',
            'dataSrc': ''
        },
        pageLength: 15,
        responsive: {
            details: {
                type: 'column'
            }
        },
        dom: '<if<t>lp>',
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: 0
        }],
        order: [
            [1, 'desc']
        ],
        columns: [
            { data: 'button' },
            { data: 'index' },
            {
                orderable: false,
                data: 'homicideDate'
            },
            { data: 'homicideMonth' },
            { data: 'homicideYear' },
            {
                orderable: false,
                data: 'victimName'
            },
            { data: 'victimAge' },
            { data: 'victimGender' },
            { data: 'victimRace' },
            { data: 'mannerOfDeath' },
            {
                orderable: false,
                data: 'blockAddress'
            },
            { data: 'neighborhood' },
            { data: 'latitude' },
            { data: 'longitude' },
            {
                orderable: false,
                data: 'articleLink',
                render: function(data, type, row) {
                    return '<a href="' + data + '" target="_blank">Read story</a>';
                }
            }
        ]
    });

    $('.filter-button').on('click', function(e) {
        e.preventDefault();
        //clear global search values
        homicideTable.search('');
        $('.filter').each(function() {
            if (this.value.length) {
                homicideTable.column($(this).data('columnIndex')).search(this.value);
            }
        });
        homicideTable.draw();
    });

    $(".dataTables_filter input").on('keyup change', function() {
        //clear column search values
        homicideTable.columns().search('');
        //clear input values
        $('.filter').val('');
    });
    homicideTable.draw();

    // This would be a single dynamic filter
    // $('#neighborhood-filter').on('change', function(){
    //     homicideTable.search(this.value).draw();
    // });

});