import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation?: string;
  severity?: string;
  custom_output?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate;
  resource_selector?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  folder: string;
  location?: string;
  custom_config?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgsTimeouts;
}

export class google_scc_management_folder_security_health_analytics_custom_module extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccManagementFolderSecurityHealthAnalyticsCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_management_folder_security_health_analytics_custom_module", resourceName);
  }

  get ancestor_module(): string {
    return `${this.resourceType}.${this.resourceName}.ancestor_module`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_editor(): string {
    return `${this.resourceType}.${this.resourceName}.last_editor`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
