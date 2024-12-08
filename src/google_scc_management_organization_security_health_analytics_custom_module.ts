import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output?: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgs {
  display_name?: string;
  enablement_state?: string;
  location?: string;
  organization: string;
  custom_config?: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgsTimeouts;
}

export class google_scc_management_organization_security_health_analytics_custom_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccManagementOrganizationSecurityHealthAnalyticsCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_management_organization_security_health_analytics_custom_module", resourceName);
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

  get organization(): string {
    return `${this.resourceType}.${this.resourceName}.organization`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
