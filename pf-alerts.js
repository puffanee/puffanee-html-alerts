function jqueryControl() {
  if (!window.jQuery) {
    console.error("[PFALERT] No jQuery added. Please install and try later");
    return false;
  }
}

jqueryControl();

$("body").append(`<div class="Pf__Alerts" id="pf_alertcontainer"></div>`);
$("#pf_alertcontainer").append(
  `<div class="Alert__List" id="pf_alertpush"></div>`
);

const $AlertContainer = $("#pf_alertcontainer");
const $Alerts = $("#pf_alertpush");

function PuffaneeAlertLocation(location) {
  jqueryControl();

  const ValidLocations = [
    "TopCenter",
    "LeftTop",
    "RightTop",
    "BottomCenter",
    "LeftBottom",
    "RightBottom",
  ];

  ValidLocations.forEach((loc) => {
    loc = loc.toLowerCase();
    if (loc === location.toLowerCase()) {
      $AlertContainer.removeAttr("class");
      $AlertContainer.addClass("Pf__Alerts").addClass(location);
    }
  });
}

function GetPfAlertCss(icon, message, style) {
  if (icon === false) {
    return `
        <div class="Alert ${style}" id="pfalert">
            <div class="Alert__Text">${message}</div>
        </div>
        `;
  } else {
    return `
        <div class="Alert ${style}" id="pfalert">
            <div class="Alert__Icon">${icon}</div>
            <div class="Alert__Text">${message}</div>
        </div>
        `;
  }
}

function pfalert(style = 0, message, setIcon = true) {
  jqueryControl();

  const st = ["Default", "Danger", "Success", "Warning", "Information"];

  style = parseInt(style);
  if (!message) return console.error("[PFALERT]: Alert contain empty message.");

  if (style === 0) {
    icon = `<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-415.000000, -882.000000)" fill="#ffffff"> <path d="M440.021,883.289 C435.258,880.604 429.167,882.197 426.417,886.85 L422.434,893.589 L415.001,898.383 L424.336,903.646 C424.129,904.055 424,904.511 424,905 C424,906.657 425.343,908 427,908 C428.074,908 429.01,907.431 429.54,906.581 L439.148,912 L439.683,903.315 L443.666,896.576 C446.416,891.924 444.784,885.976 440.021,883.289" id="bell" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`;
  } else if (style === 1) {
    icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491 0 .867-.659 1.509-1.509 1.509-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522h-1.655z" fill="#ffffff"></path></g></svg>`;
  } else if (style === 2) {
    icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 12L13.25 17L22 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 7L12.5 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
  } else if (style === 3) {
    icon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12L7.25 17C7.25 17 8.66939 15.3778 9.875 14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 12L13.25 17L22 7" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 7L12.5 11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
  } else if (style === 4) {
    icon = `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>warning-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="add" fill="#ffffff" transform="translate(32.000000, 42.666667)"> <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 7.10542736e-15,385.574034 7.10542736e-15,362.009885 C7.10542736e-15,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z M224,272 C208.761905,272 197.333333,283.264 197.333333,298.282667 C197.333333,313.984 208.415584,325.248 224,325.248 C239.238095,325.248 250.666667,313.984 250.666667,298.624 C250.666667,283.264 239.238095,272 224,272 Z M245.333333,106.666667 L202.666667,106.666667 L202.666667,234.666667 L245.333333,234.666667 L245.333333,106.666667 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>`;
  } else if (style === 5) {
    icon = `<svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#ffffff;} </style> <g> <path class="st0" d="M290.671,135.434c37.324-3.263,64.949-36.175,61.663-73.498c-3.241-37.324-36.152-64.938-73.476-61.675 c-37.324,3.264-64.949,36.164-61.686,73.488C220.437,111.096,253.348,138.698,290.671,135.434z"></path> <path class="st0" d="M311.31,406.354c-16.134,5.906-43.322,22.546-43.322,22.546s20.615-95.297,21.466-99.446 c8.71-41.829,33.463-100.86-0.069-136.747c-23.35-24.936-53.366-18.225-79.819,7.079c-17.467,16.696-26.729,27.372-42.908,45.322 c-6.55,7.273-9.032,14.065-5.93,24.717c3.332,11.515,16.8,17.226,28.705,12.871c16.134-5.895,43.3-22.534,43.3-22.534 s-12.595,57.997-18.869,87c-0.874,4.137-36.06,113.292-2.505,149.18c23.35,24.949,53.343,18.226,79.819-7.066 c17.467-16.698,26.729-27.373,42.908-45.334c6.55-7.263,9.009-14.054,5.93-24.706C336.66,407.733,323.215,402.01,311.31,406.354z"></path> </g> </g></svg>`;
  } else {
    icon = `<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bell</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-415.000000, -882.000000)" fill="#ffffff"> <path d="M440.021,883.289 C435.258,880.604 429.167,882.197 426.417,886.85 L422.434,893.589 L415.001,898.383 L424.336,903.646 C424.129,904.055 424,904.511 424,905 C424,906.657 425.343,908 427,908 C428.074,908 429.01,907.431 429.54,906.581 L439.148,912 L439.683,903.315 L443.666,896.576 C446.416,891.924 444.784,885.976 440.021,883.289" id="bell" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`;
  }

  style = st[style] || "Default";
  icon = setIcon ? icon : false;

  const getAlert = GetPfAlertCss(icon, message, style);
  $AlertContainer.css("display", "flex");
  $Alerts.css("display", "flex");

  const $alert = $(getAlert);
  $Alerts.append($alert);

  setTimeout(() => {
    $alert.remove();
  }, 12000);
}

$(document).on("click", ".Alert", function () {
  const $alert = $(this);
  $alert.remove();
});
