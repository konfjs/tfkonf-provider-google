import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccProjectCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccProjectCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccProjectCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccProjectCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output?: GoogleSccProjectCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccProjectCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccProjectCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccProjectCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccProjectCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  custom_config: GoogleSccProjectCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccProjectCustomModuleArgsTimeouts;
}

export class google_scc_project_custom_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccProjectCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_project_custom_module", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
