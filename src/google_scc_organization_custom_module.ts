import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccOrganizationCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccOrganizationCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccOrganizationCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output?: GoogleSccOrganizationCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccOrganizationCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccOrganizationCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccOrganizationCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccOrganizationCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  organization: string;
  custom_config: GoogleSccOrganizationCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccOrganizationCustomModuleArgsTimeouts;
}

export class google_scc_organization_custom_module extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccOrganizationCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_organization_custom_module", resourceName);
  }

  get ancestor_module(): string {
    return `${this.resourceType}.${this.resourceName}.ancestor_module`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get enablement_state(): string {
    return `${this.resourceType}.${this.resourceName}.enablement_state`;
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
