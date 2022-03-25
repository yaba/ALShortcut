chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});

// root menu

var contextMenuItem = {
  id: "menuALD",
  title: "Applens Detectors",
  contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuItem);

// mainmenus

chrome.contextMenus.create({
  title: "Main Page",
  parentId: "menuALD",
  id: "mainpage",
  contexts: ["selection"],
});
/*
chrome.contextMenus.create({
  title: "Avail. & Performance",
  parentId: "menuALD",
  id: "menuAP",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Config & Management",
  parentId: "menuALD",
  id: "menuCfg",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Deployment",
  parentId: "menuALD",
  id: "menuDeploy",
  contexts: ["selection"],
});
*/
// submenus

chrome.contextMenus.create({
  title: "Application Logs",
  parentId: "menuALD",
  id: "d_1",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Container Crash",
  parentId: "menuALD",
  id: "d_2",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Container Issues",
  parentId: "menuALD",
  id: "d_3",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "CPU Usage",
  parentId: "menuALD",
  id: "d_4",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "HTTP Server Errors",
  parentId: "menuALD",
  id: "d_5",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "HTTP Requests",
  parentId: "menuALD",
  id: "d_6",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Instance Allocation",
  parentId: "menuALD",
  id: "d_7",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "SNAT Exhaustion",
  parentId: "menuALD",
  id: "d_8",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "App Settings",
  parentId: "menuALD",
  id: "d_9",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Scalling Operations",
  parentId: "menuALD",
  id: "d_10",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "Kudo&FTP Deployments",
  parentId: "menuALD",
  id: "d_11",
  contexts: ["selection"],
});

chrome.contextMenus.create({
  title: "VNET Integration",
  parentId: "menuALD",
  id: "d_12",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  var trackerURL = "https://applens.azurewebsites.net/";
  var detectURL = "/detectors/";
  if (tab) {
    switch (info.menuItemId) {
      case "mainpage":
        chrome.tabs.create({ url: trackerURL + info.selectionText });
        break;
      case "d_1":
        chrome.tabs.create({
          url: trackerURL + info.selectionText + detectURL + "LinuxLogViewer",
        });
        break;
      case "d_2":
        chrome.tabs.create({
          url:
            trackerURL + info.selectionText + detectURL + "LinuxContainerCrash",
        });
        break;
      case "d_3":
        chrome.tabs.create({
          url:
            trackerURL +
            info.selectionText +
            detectURL +
            "LinuxContainerStartFailure",
        });
        break;
      case "d_4":
        chrome.tabs.create({
          url:
            trackerURL + info.selectionText + detectURL + "LinuxCpuPercentage",
        });
        break;
      case "d_5":
        chrome.tabs.create({
          url:
            trackerURL +
            info.selectionText +
            detectURL +
            "http%20server%20errors",
        });
        break;
      case "d_6":
        chrome.tabs.create({
          url:
            trackerURL +
            info.selectionText +
            detectURL +
            "requestsandAvgResponsetime",
        });
        break;
      case "d_7":
        chrome.tabs.create({
          url:
            trackerURL + info.selectionText + detectURL + "instanceallocations",
        });
        break;
      case "d_8":
        chrome.tabs.create({
          url:
            trackerURL +
            info.selectionText +
            detectURL +
            "SNAT%20Port%20Exhaustion",
        });
        break;
      case "d_9":
        chrome.tabs.create({
          url: trackerURL + info.selectionText + detectURL + "appsettings",
        });
        break;
      case "d_10":
        chrome.tabs.create({
          url:
            trackerURL +
            info.selectionText +
            detectURL +
            "allscalingoperations",
        });
        break;
      case "d_11":
        chrome.tabs.create({
          url: trackerURL + info.selectionText + detectURL + "KuduFtpEvents",
        });
        break;
      case "d_12":
        chrome.tabs.create({
          url: trackerURL + info.selectionText + detectURL + "AppVnetInfo",
        });
        break;
    }
  }
});
