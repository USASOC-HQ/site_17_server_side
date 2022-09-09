/**
 * GlideElement values from the Site 17 Networks table.
 * @interface site_17_network_circuitFields
 * @extends {cmdb_ciFields}
 */
declare interface site_17_network_circuitFields extends cmdb_ciFields {
}
/**
 * Represents physical networks that are supported by Site 17.
 * @typedef {(cmdb_ciGlideRecord & site_17_network_circuitFields)} site_17_network_circuitGlideRecord
 */
declare type site_17_network_circuitGlideRecord = cmdb_ciGlideRecord & site_17_network_circuitFields;
declare type site_17_network_circuitElement = $$element.Reference<site_17_network_circuitFields, site_17_network_circuitGlideRecord>;
declare type site_17_network_circuitProperty = $$property.generic.ReferenceProperty<site_17_network_circuitFields, site_17_network_circuitGlideRecord, site_17_network_circuitElement>;