import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output?: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  location?: string;
  custom_config?: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgsTimeouts;
}

export class google_scc_management_project_security_health_analytics_custom_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccManagementProjectSecurityHealthAnalyticsCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_management_project_security_health_analytics_custom_module", resourceName);
  }

  get ancestor_module(): string {
    return `${this.resourceType}.${this.resourceName}.ancestor_module`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
