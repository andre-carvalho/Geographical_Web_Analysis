//window.onload = function()
//{  window.parent.InpeExt.ShinyTabPanel.prototype.setChildPanelReference(window);  };

Shiny.addCustomMessageHandler(
  "server_handler",
   function(server)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(server);
      console.log("Teste de click. MSG:"+server);
   }
);

Shiny.addCustomMessageHandler(
  "coverage_handler",
   function(cov)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(cov);
      console.log("Teste de click. MSG:"+cov);
   }
);

Shiny.addCustomMessageHandler(
  "attributes_handler",
   function(attr)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(attr);
      console.log("Teste de click. MSG:"+attr);
   }
);

Shiny.addCustomMessageHandler(
  "location_handler",
   function(location)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(location);
      console.log("Teste de click. MSG:"+location);
   }
);

Shiny.addCustomMessageHandler(
  "start_handler",
   function(start)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(start);
      console.log("Teste de click. MSG:"+start);
   }
);

Shiny.addCustomMessageHandler(
  "end_handler",
   function(end)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(end);
      console.log("Teste de click. MSG:"+end);
   }
);

Shiny.addCustomMessageHandler(
  "series_handler",
   function(series)
   {  //window.parent.InpeExt.ShinyTabPanel.prototype.setServerUrl(series);
      console.log("Teste de click. MSG:"+series);
   }
);

