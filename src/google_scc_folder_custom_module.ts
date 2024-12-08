import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputProperties {
  name?: string;
  value_expression?: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputPropertiesValueExpression;
}

export interface GoogleSccFolderCustomModuleArgsCustomConfigCustomOutput {
  properties?: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutputProperties[];
}

export interface GoogleSccFolderCustomModuleArgsCustomConfigPredicate {
  description?: string;
  expression: string;
  location?: string;
  title?: string;
}

export interface GoogleSccFolderCustomModuleArgsCustomConfigResourceSelector {
  resource_types: string[];
}

export interface GoogleSccFolderCustomModuleArgsCustomConfig {
  description?: string;
  recommendation: string;
  severity: string;
  custom_output?: GoogleSccFolderCustomModuleArgsCustomConfigCustomOutput;
  predicate: GoogleSccFolderCustomModuleArgsCustomConfigPredicate;
  resource_selector: GoogleSccFolderCustomModuleArgsCustomConfigResourceSelector;
}

export interface GoogleSccFolderCustomModuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccFolderCustomModuleArgs {
  display_name: string;
  enablement_state: string;
  folder: string;
  custom_config: GoogleSccFolderCustomModuleArgsCustomConfig;
  timeouts?: GoogleSccFolderCustomModuleArgsTimeouts;
}

export class google_scc_folder_custom_module extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSccFolderCustomModuleArgs) {
    const meta = {custom_config:{isBlock:true,custom_output:{isBlock:true,properties:{isBlock:true,value_expression:{isBlock:true}}},predicate:{isBlock:true},resource_selector:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_folder_custom_module", resourceName);
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
