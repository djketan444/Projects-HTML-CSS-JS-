// $(document).ready(function () {
//     var map;
//     var marker;
//     var myOptions = {
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         mapTypeControl: false
//     }
//     var geocoder = new google.maps.Geocoder();
//     var address = "{!JSENCODE(Account.BillingStreet)}, " + "{!JSENCODE(Account.BillingCity)}, " + "{!JSENCODE(Account.BillingPostalCode)}, " + "{!JSENCODE(Account.BillingCountry)}";
//     address = address.replace(/(\r\n|\n|\r)/gm, "");
//     geocoder.geocode({ address: address }, function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK && results.length) {
//             if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
//                 //create map
//                 map = new google.maps.Map(document.getElementById("map"), myOptions);
//                 //center map
//                 map.setCenter(results[0].geometry.location);
//                 //create marker
//                 marker = new google.maps.Marker({
//                     position: results[0].geometry.location,
//                     map: map,
//                     title: "{!Account.Name}"
//                 });
//                 //add listeners
//                 google.maps.event.addListener(map, 'click', function (event) {
//                     geocoder.geocode({ 'latLng': event.latLng }, function (results, status) {
//                         if (status == google.maps.GeocoderStatus.OK && results.length) {
//                             result = results[0].address_components;
//                             var info = [];
//                             for (var i = 0; i < result.length; ++i) {
//                                 if (result[i].types[0] == "street_number") {
//                                     info.push(result[i].long_name);
//                                 }
//                                 if (result[i].types[0] == "route") {
//                                     info.push(result[i].long_name);
//                                     document.getElementById('{!$Component.accountform.accountblock.addressblocksection.BillingStreet}').value = info.join(' ');
//                                 }
//                                 if (result[i].types[0] == "locality") {
//                                     document.getElementById('{!$Component.accountform.accountblock.addressblocksection.BillingCity}').value = result[i].long_name;
//                                 }
//                                 if (result[i].types[0] == "administrative_area_level_1") {
//                                     document.getElementById('{!$Component.accountform.accountblock.addressblocksection.BillingState}').value = result[i].long_name;
//                                 }
//                                 if (result[i].types[0] == "country") {
//                                     document.getElementById('{!$Component.accountform.accountblock.addressblocksection.BillingCountry}').value = result[i].long_name;
//                                 }
//                                 if (result[i].types[0] == "postal_code") {
//                                     document.getElementById('{!$Component.accountform.accountblock.addressblocksection.BillingPostalCode}').value = result[i].long_name;
//                                 }
//                             }
//                         }
//                     });
//                 });
//             }
//         } else {
//             $('#map').css({ 'height': '15px' });
//             $('#map').html("Oops! {!Account.Name}'s billing address could not be found, please make sure the address is correct.");
//         }
//     });
// });
