"use strict";
var ensure_default_physical_networks;
(function (ensure_default_physical_networks) {
    var recordDefinitions = [
        { sys_id: '762508f90fe43300d12eba8ce1050ee7', name: 'U-NET', description: 'Non-secure (UNCLASS) internet-facing, controlled-access network' },
        { sys_id: '5aa584f90fe43300d12eba8ce1050e07', name: 'R-NET', description: 'Restricted Access Network' },
        { sys_id: 'ee6d2d970c3f42bda098446158af1bda', name: 'H-NET', description: 'High-side Restricted Access Network' },
        { sys_id: '291086b15d4e47b69c926ad4b688be3a', name: 'X-NET', description: 'Public Internet Access Network' }
    ];
    for (var i = 0; i < recordDefinitions.length; i++) {
        var gr = new GlideRecord('x_g_inte_site_17_site_17_network_circuit');
        gr.addQuery('sys_id', recordDefinitions[i].sys_id);
        gr.query();
        if (gr.next()) {
            gs.info("Physical Network with sys_id '" + recordDefinitions[i].sys_id + "' already exists (name = '" + recordDefinitions[i].name + "')");
            continue;
        }
        gr = new GlideRecord('x_g_inte_site_17_site_17_network_circuit');
        gr.addQuery('name', recordDefinitions[i].name);
        gr.query();
        if (gr.next()) {
            gs.warn("Physical Network with name matching '" + recordDefinitions[i].name + "' does not have sys_id matching '" + recordDefinitions[i].sys_id + "'");
        }
        gr = new GlideRecord('x_g_inte_site_17_site_17_network_circuit');
        gr.initialize();
        gr.setValue('sys_id', recordDefinitions[i].sys_id);
        gr.setValue('name', recordDefinitions[i].name);
        gr.setValue('short_description', recordDefinitions[i].description);
        gr.setValue('operational_status', 1);
        gr.setValue('install_status', 1);
        gr.insert();
        gs.info("Added Physical Network with sys_id '" + recordDefinitions[i].sys_id + "' (name = '" + recordDefinitions[i].name + "')");
    }
})(ensure_default_physical_networks || (ensure_default_physical_networks = {}));
